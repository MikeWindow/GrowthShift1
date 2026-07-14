import type { Metadata } from 'next';
import { User, Bell, Shield, CreditCard, Plug, Globe } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = { title: 'Settings' };

export default function SettingsPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 fade-in">
      <PageHeader
        title="Settings"
        description="Manage your account, preferences, and integrations."
      />

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="h-9 text-xs">
          <TabsTrigger value="profile" className="text-xs gap-1.5 px-3">
            <User className="h-3.5 w-3.5" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="text-xs gap-1.5 px-3">
            <Bell className="h-3.5 w-3.5" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="text-xs gap-1.5 px-3">
            <Shield className="h-3.5 w-3.5" />
            Security
          </TabsTrigger>
          <TabsTrigger value="billing" className="text-xs gap-1.5 px-3">
            <CreditCard className="h-3.5 w-3.5" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="integrations" className="text-xs gap-1.5 px-3">
            <Plug className="h-3.5 w-3.5" />
            Integrations
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-4 mt-0">
          <Card className="border-border shadow-none">
            <CardHeader className="px-5 py-4">
              <CardTitle className="text-sm font-semibold">Personal Information</CardTitle>
              <CardDescription className="text-xs">Update your name, email, and profile photo.</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="p-5 space-y-5">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=128" alt="Profile" />
                  <AvatarFallback className="text-sm font-semibold bg-primary/10 text-primary">AJ</AvatarFallback>
                </Avatar>
                <div className="space-y-1.5">
                  <p className="text-xs font-medium text-foreground">Profile Photo</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-7 text-xs">Upload</Button>
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-muted-foreground">Remove</Button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium">First Name</Label>
                  <Input defaultValue="Alex" className="h-9 text-sm" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium">Last Name</Label>
                  <Input defaultValue="Johnson" className="h-9 text-sm" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium">Email Address</Label>
                  <Input defaultValue="alex@company.com" type="email" className="h-9 text-sm" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium">Company</Label>
                  <Input defaultValue="Acme Inc." className="h-9 text-sm" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">Timezone</Label>
                <Select defaultValue="utc-8">
                  <SelectTrigger className="h-9 text-sm max-w-xs">
                    <Globe className="h-3.5 w-3.5 text-muted-foreground mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                    <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                    <SelectItem value="utc-0">UTC</SelectItem>
                    <SelectItem value="utc+1">Central European (UTC+1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end">
                <Button size="sm" className="h-8 text-xs">Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-4 mt-0">
          <Card className="border-border shadow-none">
            <CardHeader className="px-5 py-4">
              <CardTitle className="text-sm font-semibold">Notification Preferences</CardTitle>
              <CardDescription className="text-xs">Choose what you want to be notified about.</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="p-5 space-y-0 divide-y divide-border">
              {[
                { label: 'Campaign generation complete', description: 'When an AI generation finishes.', enabled: true },
                { label: 'Export ready', description: 'When your export file is ready to download.', enabled: true },
                { label: 'Project activity', description: 'When collaborators make changes.', enabled: false },
                { label: 'Weekly summary', description: 'A weekly report of your campaign performance.', enabled: true },
                { label: 'Product updates', description: 'New features and improvements.', enabled: false },
              ].map((pref) => (
                <div key={pref.label} className="flex items-center justify-between py-4">
                  <div className="space-y-0.5">
                    <p className="text-xs font-medium text-foreground">{pref.label}</p>
                    <p className="text-[11px] text-muted-foreground">{pref.description}</p>
                  </div>
                  <Switch defaultChecked={pref.enabled} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-4 mt-0">
          <Card className="border-border shadow-none">
            <CardHeader className="px-5 py-4">
              <CardTitle className="text-sm font-semibold">Password</CardTitle>
              <CardDescription className="text-xs">Update your password regularly to stay secure.</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="p-5 space-y-4">
              <div className="space-y-1.5 max-w-sm">
                <Label className="text-xs font-medium">Current Password</Label>
                <Input type="password" className="h-9 text-sm" />
              </div>
              <div className="space-y-1.5 max-w-sm">
                <Label className="text-xs font-medium">New Password</Label>
                <Input type="password" className="h-9 text-sm" />
              </div>
              <div className="space-y-1.5 max-w-sm">
                <Label className="text-xs font-medium">Confirm New Password</Label>
                <Input type="password" className="h-9 text-sm" />
              </div>
              <Button size="sm" className="h-8 text-xs">Update Password</Button>
            </CardContent>
          </Card>
          <Card className="border-border shadow-none">
            <CardHeader className="px-5 py-4">
              <CardTitle className="text-sm font-semibold">Two-Factor Authentication</CardTitle>
              <CardDescription className="text-xs">Add an extra layer of security to your account.</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="p-5 flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-xs font-medium text-foreground">Authenticator App</p>
                <p className="text-[11px] text-muted-foreground">Use an authenticator app to generate codes.</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-[10px] h-4">Not configured</Badge>
                <Button size="sm" variant="outline" className="h-7 text-xs">Enable</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-4 mt-0">
          <Card className="border-border shadow-none">
            <CardHeader className="px-5 py-4">
              <CardTitle className="text-sm font-semibold">Current Plan</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-foreground">Pro Plan</p>
                    <Badge className="text-[10px] h-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">Current</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">$49 / month · Renews Jan 1, 2025</p>
                </div>
                <Button size="sm" variant="outline" className="h-7 text-xs">Manage Plan</Button>
              </div>
              <Separator className="my-4" />
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Campaigns Generated', value: '184', limit: '500' },
                  { label: 'Projects', value: '12', limit: 'Unlimited' },
                  { label: 'Templates', value: '8', limit: '50' },
                ].map((usage) => (
                  <div key={usage.label} className="space-y-0.5">
                    <p className="text-[11px] text-muted-foreground">{usage.label}</p>
                    <p className="text-xs font-semibold text-foreground">{usage.value} <span className="font-normal text-muted-foreground">/ {usage.limit}</span></p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations Tab */}
        <TabsContent value="integrations" className="space-y-4 mt-0">
          <Card className="border-border shadow-none">
            <CardHeader className="px-5 py-4">
              <CardTitle className="text-sm font-semibold">Connected Apps</CardTitle>
              <CardDescription className="text-xs">Manage integrations with external services.</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="p-5 space-y-0 divide-y divide-border">
              {[
                { name: 'Google Ads', description: 'Connect to publish campaigns directly.', connected: false, soon: false },
                { name: 'Google Analytics', description: 'Import conversion data for optimization.', connected: false, soon: false },
                { name: 'Meta Ads', description: 'Cross-platform campaign management.', connected: false, soon: true },
                { name: 'HubSpot', description: 'Sync leads from your ad campaigns.', connected: false, soon: true },
              ].map((integration) => (
                <div key={integration.name} className="flex items-center justify-between py-4">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-medium text-foreground">{integration.name}</p>
                      {integration.soon && (
                        <Badge variant="outline" className="text-[10px] h-4">Coming Soon</Badge>
                      )}
                    </div>
                    <p className="text-[11px] text-muted-foreground">{integration.description}</p>
                  </div>
                  <Button
                    size="sm"
                    variant={integration.connected ? 'outline' : 'default'}
                    className="h-7 text-xs"
                    disabled={integration.soon}
                  >
                    {integration.connected ? 'Disconnect' : 'Connect'}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
