/**
 * Leads Management Service for DigMa IT Solutions
 * Handles storage, retrieval, and status tracking for incoming client inquiries.
 */

// In-memory leads storage for runtime persistence across API requests
const globalForLeads = globalThis;
if (!globalForLeads.__digmaLeads) {
  globalForLeads.__digmaLeads = [];
}

/**
 * Forward lead data to Google Sheet / Google Forms Webhook
 */
async function forwardToGoogleWebhook(lead) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    return;
  }

  try {
    const payload = {
      id: lead.id,
      name: lead.name || '',
      email: lead.email || '',
      phone: lead.phone || '',
      company: lead.company || '',
      service: lead.service || '',
      budget: lead.budget || '',
      message: lead.message || '',
      createdAt: lead.createdAt || new Date().toISOString(),
      recipientEmail: process.env.NOTIFICATION_EMAIL || 'digmaitsolutions@gmail.com',
    };

    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('Failed forwarding lead to Google Webhook:', err?.message || err);
  }
}

/**
 * Creates and stores a new lead inquiry
 */
export async function createLead(leadPayload) {
  const newLead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...leadPayload,
    status: 'new',
    ip: leadPayload.ip || '127.0.0.1',
    createdAt: new Date().toISOString(),
  };

  globalForLeads.__digmaLeads.unshift(newLead);

  // Asynchronously dispatch to Google (Google Sheets / Google Form webhook & email)
  forwardToGoogleWebhook(newLead).catch((err) => {
    console.error('Async webhook dispatch error:', err);
  });

  return newLead;
}

/**
 * Retrieves all stored leads (most recent first)
 */
export async function getAllLeads(limit = 20) {
  return globalForLeads.__digmaLeads.slice(0, limit);
}

/**
 * Retrieves summary statistics for admin overview
 */
export async function getLeadStats() {
  const total = globalForLeads.__digmaLeads.length;
  const newCount = globalForLeads.__digmaLeads.filter(l => l.status === 'new').length;
  const contactedCount = globalForLeads.__digmaLeads.filter(l => l.status === 'contacted').length;

  return {
    totalLeads: total,
    newLeads: newCount,
    contactedLeads: contactedCount,
    popularServices: {
      'web-development': globalForLeads.__digmaLeads.filter(l => l.service === 'web-development').length,
      'app-development': globalForLeads.__digmaLeads.filter(l => l.service === 'app-development').length,
      'digital-marketing': globalForLeads.__digmaLeads.filter(l => l.service === 'digital-marketing').length,
    }
  };
}
