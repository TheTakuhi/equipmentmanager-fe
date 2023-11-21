import { rest } from "msw";

import { ItemState } from "../../../models/item/ItemState";
import { ItemType } from "../../../models/item/ItemType";
import { QualityState } from "../../../models/item/QualityState";
import { Loan } from "../../../models/loan/Loan";
import { PageableParam } from "../../../models/utils/Pageable";
import { ADMIN, CustomRole } from "../../../security/model/Role";

const getMockedLoans = (): Loan[] => {
  return [
    {
      id: "1",
      dateOfLending: "2023-10-31T01:30:00.000-05:00",
      dateOfReturning: "",
      item: {
        id: "123",
        serialCode: "123456789A",
        type: ItemType.CHAIR,
        comment: "Od polívky a kečupu",
        state: ItemState.BORROWED,
        qualityState: QualityState.SLIGHTLY_USED,
        dateOfCreation: "2023-10-31T01:30:00.000-05:00",
        managerOwner: {
          id: "01ef73d8-70b8-4bf9-953d-b69f32c1762c",
          personalNumber: "123456",
          ldapId: "01ef73d8-70b8-4bf9-953d-b69f32c1762c",
          login: "theshrek",
          email: "shrek@swamp.ffa",
          firstName: "Shrek",
          lastName: "Joe",
          fullName: "Joe Shrek",
          photo: "",
          userRoles: [CustomRole.ADMIN],
          ownedContractIds: [""],
          managedContractIds: [""],
        },
      },
      lender: {
        id: "1",
        personalNumber: "123456789",
        ldapId: "1234543",
        login: "stevejobs",
        email: "steve.jobs@email.com",
        firstName: "Steve",
        lastName: "Jobs",
        fullName: "Steve Jobs",
        photo: "steve.jpg",
        userRoles: [ADMIN],
        ownedContractIds: ["contract1", "contract2"],
        managedContractIds: ["contract3", "contract4"],
      },
    },
    {
      id: "2",
      dateOfLending: "2023-07-31T01:30:00.000-05:00",
      dateOfReturning: "",
      item: {
        id: "123",
        serialCode: "623456789A",
        type: ItemType.TABLE,
        comment: "",
        state: ItemState.BORROWED,
        qualityState: QualityState.NEW,
        dateOfCreation: "2023-07-31T01:30:00.000-05:00",
        managerOwner: {
          id: "01ef73d8-70b8-4bf9-953d-b69f32c1762c",
          personalNumber: "123456",
          ldapId: "01ef73d8-70b8-4bf9-953d-b69f32c1762c",
          login: "theshrek",
          email: "shrek@swamp.ffa",
          firstName: "Shrek",
          lastName: "Joe",
          fullName: "Joe Shrek",
          photo: "",
          userRoles: [CustomRole.ADMIN],
          ownedContractIds: [""],
          managedContractIds: [""],
        },
      },
      lender: {
        id: "1",
        personalNumber: "123456789",
        ldapId: "1234543",
        login: "stevejobs",
        email: "steve.jobs@email.com",
        firstName: "Steve",
        lastName: "Jobs",
        fullName: "Steve Jobs",
        photo: "steve.jpg",
        userRoles: [ADMIN],
        ownedContractIds: ["contract1", "contract2"],
        managedContractIds: ["contract3", "contract4"],
      },
    },
  ];
};

export const getGetAllArchivedOrdersPagedMock = (props: PageableParam) => ({
  currentPage: (() => {
    return props.PageNumber ? props.PageNumber : 1;
  })(),
  totalElements: (() => {
    // Update this line to reflect the actual number of users in your mock data
    return getMockedLoans().length;
  })(),
  totalPages: (() => {
    // Calculate total pages based on the number of items per page
    return Math.ceil(
      getMockedLoans().length / (props.PageSize ? props.PageSize : 30),
    );
  })(),
  pageSize: (() => {
    return props.PageSize ? props.PageSize : 30;
  })(),
  hasPrevious: (() => {
    return props.PageNumber && props.PageNumber !== 1;
  })(),
  hasNext: (() => {
    return !props.PageNumber || props.PageNumber === 1;
  })(),
  content: getMockedLoans(),
});

export const getLoansMSW = () => [
  rest.get("*/loans", (_req, res, ctx) => {
    const queryParams = Object.fromEntries(_req.url.searchParams);
    const props: PageableParam = {
      page: Number(queryParams.page),
      size: Number(queryParams.size),
      sort: queryParams.sort,
    };
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked All Paginated loans status"),
      ctx.json(getGetAllArchivedOrdersPagedMock(props)),
    );
  }),
];
