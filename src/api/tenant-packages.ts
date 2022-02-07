export interface FastCommentsAPITenantPackageBase {
    id: string;
    name: string;
    tenantId: string;
    createdAt: string;
    monthlyCostUSD: number;
    yearlyCostUSD: number;
    monthlyStripePlanId?: string;
    yearlyStripePlanId?: string;
    maxMonthlyPageLoads: number;
    maxMonthlyAPICredits: number;
    maxMonthlyComments: number;
    maxConcurrentUsers: number;
    maxTenantUsers: number;
    maxSSOUsers: number;
    maxModerators: number;
    maxDomains: number;
    maxWhiteLabeledTenants: number;
    hasWhiteLabeling: boolean;
    hasDebranding: boolean;
    forWhoText: string;
    featureTaglines: string[];
    hasFlexPricing: boolean;
}

export interface FastCommentsAPITenantPackageFixedPricing extends FastCommentsAPITenantPackageBase {
    hasFlexPricing: false;
    flexPageLoadCostCents: null | undefined;
    flexPageLoadUnit: null | undefined;
    flexCommentCostCents: null | undefined;
    flexCommentUnit: null | undefined;
    flexSSOUserCostCents: null | undefined;
    flexSSOUserUnit: null | undefined;
    flexAPICreditCostCents: null | undefined;
    flexAPICreditUnit: null | undefined;
    flexModeratorCostCents: null | undefined;
    flexModeratorUnit: null | undefined;
    flexAdminCostCents: null | undefined;
    flexAdminUnit: null | undefined;
    flexDomainCostCents: null | undefined;
    flexDomainUnit: null | undefined;
    flexMinimumCostCents: null | undefined;
}

export interface FastCommentsAPITenantPackageFlexPricing extends FastCommentsAPITenantPackageBase {
    hasFlexPricing: true;
    flexPageLoadCostCents: number;
    flexPageLoadUnit: number;
    flexCommentCostCents: number;
    flexCommentUnit: number;
    flexSSOUserCostCents: number;
    flexSSOUserUnit: number;
    flexAPICreditCostCents: number;
    flexAPICreditUnit: number;
    flexModeratorCostCents: number;
    flexModeratorUnit: number;
    flexAdminCostCents: number;
    flexAdminUnit: number;
    flexDomainCostCents: number;
    flexDomainUnit: number;
    flexMinimumCostCents: number;
}

export type FastCommentsAPITenantPackage = FastCommentsAPITenantPackageFixedPricing | FastCommentsAPITenantPackageFlexPricing;
export type FastCommentsAPITenantPackageCreateOrUpdate = FastCommentsAPITenantPackageFixedPricing | FastCommentsAPITenantPackageFlexPricing;
