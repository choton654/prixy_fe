// config.js
const DEV_BASE_URL = 'https://prixy-be.onrender.com/api/admin/';
// const DEV_BASE_URL = 'http://localhost:8000/api/admin/';

// export const BASE_URL = LOCAL_BASE_URL;
export const BASE_URL = DEV_BASE_URL;
export const LoginAPI = `${BASE_URL}login`;

//Users Api 
export const getAllUsersAPI = `${BASE_URL}users/get-users-list`;
export const getUserProfileAPI = `${BASE_URL}users/get-profile`;
export const updateKycAndVerifiedStatus = `${BASE_URL}users/update-kyc-and-verified-status`; 

//Users Api 
export const getAllAgentAPI = `${BASE_URL}agents/get-agent-list`;
export const getAgentProfileAPI = `${BASE_URL}agents/get-profile`;
export const updateKycAndVerifiedStatusForAgent = `${BASE_URL}agents/update-kyc-and-verified-status`; 

// request
export const getAllRequestAPI = `${BASE_URL}agents/get-requests`;
//GobalSetting Api 
export const getAllGobalSetting = `${BASE_URL}gobal-settings/get-gobal-settings-list`;
export const addGobalSetting    = `${BASE_URL}gobal-settings/add-gobal-settings`;
export const editGobalSetting   = `${BASE_URL}gobal-settings/edit-gobal-settings`;
export const deleteGobalSetting   = `${BASE_URL}gobal-settings/delete-gobal-settings`;

// prixy.admin@gmail.com
// 123456