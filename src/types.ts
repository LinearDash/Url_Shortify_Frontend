export type User = {
    id : string;
    name: string;
    email: string;
    avatarUrl?: string;
}

export type UrlData = {
    id: string;
    originalUrl: string;
    shortCode: string;
    ownerId: string;
    createdAt: string;
    clickLogs: ClickLog[];
};

export type ClickLog = {
    id: string;
    urlId: string;
    ip: string;
    userAgent: string;
    country: string;
    clickedAt: string;
};
