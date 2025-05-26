export const BASE_API_URL = '/api';

export * from './lib/model/token.model';
export * from './lib/model/user.model';
export * from './lib/model/role.model';
export * from './lib/model/auth.model';
export * from './lib/model/registration.model';
export * from './lib/model/startblock.model';
export * from './lib/model/drink.model';
export * from './lib/model/participant.model';
export * from './lib/model/feature.model';

export * from './lib/infrastructure/user/user.service';
export * from './lib/infrastructure/auth/auth-api.service';
export * from './lib/infrastructure/feature/feature-api.service';

export * from './lib/application/token/token.service';
export * from './lib/application/feature-store/feature-store.service';
