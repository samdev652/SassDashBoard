import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface Vendor {
  id: string;
  name: string;
  category: string;
  securityScore: number;
  status: "active" | "review" | "suspended";
  lastAudit: string;
  riskLevel: "low" | "medium" | "high" | "critical";
  compliance: number;
}

interface VendorTableProps {
  vendors: Vendor[];
}

export function VendorTable({ vendors }: VendorTableProps) {
  const [sortColumn, setSortColumn] = useState<keyof Vendor>("securityScore");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleSort = (column: keyof Vendor) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };

  const sortedVendors = [...vendors].sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }

    const aString = String(aValue);
    const bString = String(bValue);
    return sortDirection === "asc"
      ? aString.localeCompare(bString)
      : bString.localeCompare(aString);
  });

  const totalPages = Math.ceil(sortedVendors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedVendors = sortedVendors.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getRiskBadge = (risk: Vendor["riskLevel"]) => {
    const variants = {
      low: "default",
      medium: "secondary",
      high: "default",
      critical: "destructive",
    } as const;

    const colors = {
      low: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
      medium: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
      high: "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20",
      critical: "",
    };

    return (
      <Badge
        variant={variants[risk]}
        className={risk !== "critical" ? colors[risk] : ""}
      >
        {risk.toUpperCase()}
      </Badge>
    );
  };

  const getStatusBadge = (status: Vendor["status"]) => {
    const variants = {
      active: "default",
      review: "secondary",
      suspended: "destructive",
    } as const;

    const colors = {
      active: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
      review: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
      suspended: "",
    };

    return (
      <Badge
        variant={variants[status]}
        className={status !== "suspended" ? colors[status] : ""}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500 font-semibold";
    if (score >= 60) return "text-yellow-500 font-semibold";
    if (score >= 40) return "text-orange-500 font-semibold";
    return "text-red-500 font-semibold";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vendor Security Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort("name")}
                    className="h-8 -ml-3"
                  >
                    Vendor Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Category</TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort("securityScore")}
                    className="h-8 -ml-3"
                  >
                    Security Score
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Compliance</TableHead>
                <TableHead>Last Audit</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedVendors.map((vendor) => (
                <TableRow key={vendor.id}>
                  <TableCell className="font-medium">{vendor.name}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {vendor.category}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className={getScoreColor(vendor.securityScore)}>
                        {vendor.securityScore}
                      </span>
                      <div className="w-16 bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            vendor.securityScore >= 80
                              ? "bg-green-500"
                              : vendor.securityScore >= 60
                              ? "bg-yellow-500"
                              : vendor.securityScore >= 40
                              ? "bg-orange-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${vendor.securityScore}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(vendor.status)}</TableCell>
                  <TableCell>{getRiskBadge(vendor.riskLevel)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{vendor.compliance}%</span>
                      <div className="w-12 bg-muted rounded-full h-1.5">
                        <div
                          className="bg-primary h-1.5 rounded-full"
                          style={{ width: `${vendor.compliance}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {vendor.lastAudit}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon-sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Run Audit</DropdownMenuItem>
                        <DropdownMenuItem>Generate Report</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Suspend Vendor
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-muted-foreground">
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, vendors.length)} of{" "}
            {vendors.length} vendors
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-8 h-8 p-0"
                  >
                    {page}
                  </Button>
                )
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
