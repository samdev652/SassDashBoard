import {
  Shield,
  Users,
  AlertTriangle,
  CheckCircle,
  Activity,
} from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { VendorTable, type Vendor } from "@/components/VendorTable";
import { SecurityCharts } from "@/components/SecurityCharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockVendors: Vendor[] = [
  {
    id: "1",
    name: "CloudStore Inc",
    category: "Cloud Storage",
    securityScore: 92,
    status: "active",
    lastAudit: "2024-11-15",
    riskLevel: "low",
    compliance: 95,
  },
  {
    id: "2",
    name: "DataSync Solutions",
    category: "Data Analytics",
    securityScore: 45,
    status: "review",
    lastAudit: "2024-10-28",
    riskLevel: "critical",
    compliance: 62,
  },
  {
    id: "3",
    name: "SecureAuth Pro",
    category: "Authentication",
    securityScore: 88,
    status: "active",
    lastAudit: "2024-11-20",
    riskLevel: "low",
    compliance: 92,
  },
  {
    id: "4",
    name: "PaymentGate",
    category: "Payment Processing",
    securityScore: 78,
    status: "active",
    lastAudit: "2024-11-10",
    riskLevel: "medium",
    compliance: 85,
  },
  {
    id: "5",
    name: "MailerPro",
    category: "Email Services",
    securityScore: 65,
    status: "review",
    lastAudit: "2024-10-05",
    riskLevel: "high",
    compliance: 70,
  },
  {
    id: "6",
    name: "Analytics360",
    category: "Business Intelligence",
    securityScore: 82,
    status: "active",
    lastAudit: "2024-11-18",
    riskLevel: "low",
    compliance: 88,
  },
  {
    id: "7",
    name: "CDN Express",
    category: "Content Delivery",
    securityScore: 75,
    status: "active",
    lastAudit: "2024-11-12",
    riskLevel: "medium",
    compliance: 80,
  },
  {
    id: "8",
    name: "BackupVault",
    category: "Data Backup",
    securityScore: 90,
    status: "active",
    lastAudit: "2024-11-22",
    riskLevel: "low",
    compliance: 94,
  },
  {
    id: "9",
    name: "APIHub Services",
    category: "API Management",
    securityScore: 58,
    status: "review",
    lastAudit: "2024-09-30",
    riskLevel: "high",
    compliance: 68,
  },
  {
    id: "10",
    name: "MonitorMax",
    category: "System Monitoring",
    securityScore: 85,
    status: "active",
    lastAudit: "2024-11-25",
    riskLevel: "low",
    compliance: 90,
  },
  {
    id: "11",
    name: "CryptoSafe",
    category: "Encryption",
    securityScore: 95,
    status: "active",
    lastAudit: "2024-11-28",
    riskLevel: "low",
    compliance: 98,
  },
  {
    id: "12",
    name: "LogStream",
    category: "Log Management",
    securityScore: 72,
    status: "active",
    lastAudit: "2024-11-08",
    riskLevel: "medium",
    compliance: 78,
  },
];

const recentActivities = [
  {
    id: 1,
    action: "Security audit completed",
    vendor: "CryptoSafe",
    time: "5 minutes ago",
    status: "success",
  },
  {
    id: 2,
    action: "Risk level increased",
    vendor: "DataSync Solutions",
    time: "23 minutes ago",
    status: "warning",
  },
  {
    id: 3,
    action: "Compliance certification renewed",
    vendor: "CloudStore Inc",
    time: "1 hour ago",
    status: "success",
  },
  {
    id: 4,
    action: "Vulnerability detected",
    vendor: "MailerPro",
    time: "2 hours ago",
    status: "error",
  },
  {
    id: 5,
    action: "New vendor onboarded",
    vendor: "MonitorMax",
    time: "3 hours ago",
    status: "info",
  },
];

export function Dashboard() {
  const avgSecurityScore = Math.round(
    mockVendors.reduce((acc, v) => acc + v.securityScore, 0) /
      mockVendors.length
  );
  const criticalIssues = mockVendors.filter(
    (v) => v.riskLevel === "critical" || v.riskLevel === "high"
  ).length;
  const complianceRate = Math.round(
    mockVendors.reduce((acc, v) => acc + v.compliance, 0) / mockVendors.length
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Dashboard
        </h2>
        <p className="text-muted-foreground mt-1">
          Monitor and manage your vendor security landscape
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Vendors"
          value={mockVendors.length}
          change="+3 this month"
          icon={Users}
          trend="up"
          description="from last month"
        />
        <StatCard
          title="Avg Security Score"
          value={avgSecurityScore}
          change="+5.2%"
          icon={Shield}
          trend="up"
          description="vs last month"
        />
        <StatCard
          title="Critical Issues"
          value={criticalIssues}
          change="-2 resolved"
          icon={AlertTriangle}
          trend="down"
          description="vs last week"
        />
        <StatCard
          title="Compliance Rate"
          value={`${complianceRate}%`}
          change="+2.1%"
          icon={CheckCircle}
          trend="up"
          description="across all vendors"
        />
      </div>

      <SecurityCharts />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <VendorTable vendors={mockVendors} />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === "success"
                        ? "bg-green-500"
                        : activity.status === "warning"
                        ? "bg-yellow-500"
                        : activity.status === "error"
                        ? "bg-red-500"
                        : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground">
                      {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.vendor}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                  <Badge
                    variant={
                      activity.status === "error" ? "destructive" : "secondary"
                    }
                    className={
                      activity.status === "success"
                        ? "bg-green-500/10 text-green-500"
                        : activity.status === "warning"
                        ? "bg-yellow-500/10 text-yellow-500"
                        : activity.status === "info"
                        ? "bg-blue-500/10 text-blue-500"
                        : ""
                    }
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
