import {
  Shield,
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  AlertTriangle,
  TrendingUp,
  Database,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "vendors", label: "Vendors", icon: Users },
  { id: "security", label: "Security Score", icon: Shield },
  { id: "risks", label: "Risk Assessment", icon: AlertTriangle },
  { id: "compliance", label: "Compliance", icon: FileText },
  { id: "analytics", label: "Analytics", icon: TrendingUp },
  { id: "database", label: "Data Management", icon: Database },
  { id: "settings", label: "Settings", icon: Settings },
];

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="w-64 bg-card border-r border-border h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">SecureVendor</h1>
            <p className="text-xs text-muted-foreground">Security Platform</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="bg-accent rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-foreground">
              Security Status
            </span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            All systems operational
          </p>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: "94%" }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">94% Secure</p>
        </div>
      </div>
    </aside>
  );
}
