import { rest } from "msw";

import { Item } from "../../../models/item/Item";
import { ItemState } from "../../../models/item/ItemState";
import { ItemType } from "../../../models/item/ItemType";
import { QualityState } from "../../../models/item/QualityState";
import { PageableParam } from "../../../models/utils/Pageable";
import { CustomRole } from "../../../security/model/Role";

const getMockedItems = (): Item[] => {
  return [
    {
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
    {
      id: "1234",
      serialCode: "123456789A4",
      type: ItemType.TABLE,
      comment: "",
      state: ItemState.AVAILABLE,
      qualityState: QualityState.NEW,
      dateOfCreation: "2023-11-23T01:30:00.000-05:00",
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
  ];
};

export const getGetAllItemsPagedMock = (props: PageableParam) => ({
  currentPage: (() => {
    return props.PageNumber ? props.PageNumber : 1;
  })(),
  totalElements: (() => {
    // Update this line to reflect the actual number of users in your mock data
    return getMockedItems().length;
  })(),
  totalPages: (() => {
    // Calculate total pages based on the number of items per page
    return Math.ceil(
      getMockedItems().length / (props.PageSize ? props.PageSize : 30),
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
  content: getMockedItems(),
});

export const getItemsMSW = () => [
  rest.get("*/items", (_req, res, ctx) => {
    const queryParams = Object.fromEntries(_req.url.searchParams);
    const props: PageableParam = {
      page: Number(queryParams.page),
      size: Number(queryParams.size),
      sort: queryParams.sort,
    };
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked All Paginated items status"),
      ctx.json(getGetAllItemsPagedMock(props)),
    );
  }),
];
