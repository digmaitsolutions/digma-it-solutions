import { NextResponse } from 'next/server';
import { validateLeadForm } from '@/lib/validation';
import { createLead, getAllLeads, getLeadStats } from '@/lib/leads';

/**
 * POST /api/leads
 * Handles client consultation requests & lead submissions
 */
export async function POST(request) {
  try {
    const body = await request.json();

    const { isValid, errors, sanitizedData } = validateLeadForm(body);

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please verify the submitted information.',
          errors
        },
        { status: 400 }
      );
    }

    // Save validated lead
    const lead = await createLead(sanitizedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your project inquiry has been received. Our solutions team will contact you within 24 hours.',
        leadId: lead.id,
        createdAt: lead.createdAt
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('Error handling lead submission:', err);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error while processing your request. Please try again or email us directly.'
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/leads
 * Retrieves lead inquiries summary & stats
 */
export async function GET() {
  try {
    const stats = await getLeadStats();
    const recent = await getAllLeads(5);

    // Sanitize sensitive email details for preview
    const previewLeads = recent.map(lead => ({
      id: lead.id,
      name: lead.name,
      company: lead.company || 'Confidential Client',
      service: lead.service,
      budget: lead.budget,
      status: lead.status,
      createdAt: lead.createdAt
    }));

    return NextResponse.json({
      success: true,
      stats,
      recentLeads: previewLeads
    });
  } catch (err) {
    console.error('Error fetching leads:', err);
    return NextResponse.json(
      { success: false, message: 'Could not fetch leads data' },
      { status: 500 }
    );
  }
}
