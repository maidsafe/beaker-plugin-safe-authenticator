import client from '../ffi/client_manager';

export const manifest = {
  setNetworkListener: 'async',
  logout: 'sync',
  login: 'promise',
  createAccount: 'promise',
  getAuthorisedApps: 'promise',
  revokeApp: 'promise'
};

export const isAutheticatorAuthorised = () => client.isAutheticatorAuthorised();

export const authDecision = (appId, payload, isAllowed) =>
  client.authDecision(appId, payload, isAllowed);

export const setNetworkIpcListener = (cb) => client.setNetworkIpcListener(cb);

export const setNetworkListener = (cb) => client.setNetworkListener(cb);

export const logout = () => client.logout();

export const login = (secret, password) => client.login(secret, password);

export const createAccount = (secret, password) => client.createAccount(secret, password);

export const getAuthorisedApps = () => client.getAuthorisedApps();

export const revokeApp = (appId) => client.revokeApp(appId);

export const createUnregisteredClient = () => client.createUnregisteredClient();
