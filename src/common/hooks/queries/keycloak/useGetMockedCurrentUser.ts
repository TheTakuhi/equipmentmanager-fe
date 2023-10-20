import { KeycloakProfile } from "keycloak-js";

export const useGetMockedCurrentUser = (): {
  isLoading: boolean;
  isError: boolean;
  data: KeycloakProfile;
} => {
  return {
    isLoading: false,
    isError: false,
    data: {
      id: "01ef73d8-70b8-4bf9-953d-b69f32c1762c",
      username: "theshrek",
      email: "shrek@swamp.ffa",
      firstName: "Shrek",
      lastName: "",
      enabled: true,
      emailVerified: true,
      totp: true,
      createdTimestamp: 123456,
    },
  };
};
