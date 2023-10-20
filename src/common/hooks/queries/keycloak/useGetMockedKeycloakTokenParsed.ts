import { KeycloakTokenParsed } from "keycloak-js";

export const useGetMockedKeycloakTokenParsed = (): {
  isLoading: boolean;
  isError: boolean;
  data: KeycloakTokenParsed;
} => {
  return {
    isLoading: false,
    isError: false,
    data: {
      exp: 1234567890,
      iat: 1234567890,
      auth_time: 1234567890,
      jti: "33b103b8-c382-4451-a94f-c792c10d2680",
      iss: "https://staging.int.tieto.com/keycloak/auth/realms/staging-realm",
      aud: "account",
      sub: "360c38ad-6ade-44ab-9590-30e5dfdf027a",
      typ: "Bearer",
      azp: "equipment-manager-fe",
      nonce: "ab98b5c9-a0d7-4e04-8cb5-154b2cfa62fb",
      session_state: "a22b63da-dca3-482f-bd2b-cb2ac3d0aaf7",
      acr: "0",
      "allowed-origins": ["*"],
      realm_access: {
        roles: [
          "offline_access",
          "uma_authorization",
          "default-roles-staging-realm",
        ],
      },
      resource_access: {
        "equipment-manager-fe": {
          roles: ["ADMIN"],
        },
        account: {
          roles: ["manage-account", "manage-account-links", "view-profile"],
        },
      },
      scope: "openid email profile",
      sid: "a22b63da-dca3-482f-bd2b-cb2ac3d0aaf7",
      lastName: "",
      country: "Far far away",
      email_verified: false,
      city: "Swamp",
      employeeId: "123456",
      preferred_username: "theshrek",
      office: "Swamp",
      given_name: "Shrek",
      LDAP_ID: "01ef73d8-70b8-4bf9-953d-b69f32c1762c",
      firstName: "Shrek",
      profileSettings: {
        theme: {
          primaryColor: "#01548f",
          secondaryColor: "#ffeec8",
          darkMode: false,
        },
        preferredLocation: {
          office: "",
          floorName: "",
          country: "",
        },
      },
      name: "Shrek",
      family_name: "",
      email: "shrek@swamp.ffa",
    },
  };
};
