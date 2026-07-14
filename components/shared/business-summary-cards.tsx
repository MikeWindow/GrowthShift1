import { Building2, Wrench, Users, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EditableRow, EditableTagsRow } from '@/components/shared/editable-field';
import type { BusinessProfile } from '@/types';

interface BusinessSummaryCardsProps {
  profile: BusinessProfile;
  onUpdate: (field: keyof BusinessProfile, value: string | string[]) => void;
}

export function BusinessSummaryCards({ profile, onUpdate }: BusinessSummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* Left column */}
      <div className="space-y-4">
        <Card className="border-border shadow-none">
          <CardHeader className="px-5 pt-4 pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted border border-border">
                <Building2 className="h-3 w-3 text-muted-foreground" />
              </div>
              <CardTitle className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Business Identity
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-5 py-0 divide-y divide-border pb-1">
            <EditableRow label="Business Name" value={profile.name} onSave={(v) => onUpdate('name', v)} />
            <EditableRow label="Industry" value={profile.industry} onSave={(v) => onUpdate('industry', v)} />
          </CardContent>
        </Card>

        <Card className="border-border shadow-none">
          <CardHeader className="px-5 pt-4 pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted border border-border">
                <Wrench className="h-3 w-3 text-muted-foreground" />
              </div>
              <CardTitle className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Services
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-5 py-0 divide-y divide-border pb-1">
            <EditableRow
              label="Primary Service"
              value={profile.primaryService}
              onSave={(v) => onUpdate('primaryService', v)}
            />
            <EditableTagsRow
              label="Secondary Services"
              values={profile.secondaryServices}
              onSave={(v) => onUpdate('secondaryServices', v)}
            />
          </CardContent>
        </Card>
      </div>

      {/* Right column */}
      <div className="space-y-4">
        <Card className="border-border shadow-none">
          <CardHeader className="px-5 pt-4 pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted border border-border">
                <Users className="h-3 w-3 text-muted-foreground" />
              </div>
              <CardTitle className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Target Market
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-5 py-0 divide-y divide-border pb-1">
            <EditableTagsRow
              label="Target Customers"
              values={profile.targetCustomers}
              onSave={(v) => onUpdate('targetCustomers', v)}
            />
            <EditableTagsRow
              label="Service Areas"
              values={profile.serviceAreas}
              onSave={(v) => onUpdate('serviceAreas', v)}
            />
          </CardContent>
        </Card>

        <Card className="border-border shadow-none">
          <CardHeader className="px-5 pt-4 pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted border border-border">
                <Shield className="h-3 w-3 text-muted-foreground" />
              </div>
              <CardTitle className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Trust &amp; Contact
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-5 py-0 divide-y divide-border pb-1">
            <EditableTagsRow
              label="Trust Signals"
              values={profile.trustSignals}
              onSave={(v) => onUpdate('trustSignals', v)}
            />
            <EditableRow
              label="Primary CTA"
              value={profile.primaryCta}
              onSave={(v) => onUpdate('primaryCta', v)}
            />
            <EditableRow label="Phone" value={profile.phone} onSave={(v) => onUpdate('phone', v)} />
            <EditableRow
              label="Landing Page"
              value={profile.landingPage}
              onSave={(v) => onUpdate('landingPage', v)}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
