export declare function DatabaseConnection(connectionName?: string): (target: Record<string, any>, key: string | symbol, index?: number) => void;
export declare function DatabaseEntity(entity: string, connectionName?: string): (target: Record<string, any>, key: string | symbol, index?: number) => void;
