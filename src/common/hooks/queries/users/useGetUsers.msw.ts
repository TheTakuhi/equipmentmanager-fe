import { rest } from "msw";

import { User } from "../../../models/user/User";
import { PageableParam } from "../../../models/utils/Pageable";
import { ADMIN, MANAGER } from "../../../security/model/Role";

const getMockedUsers = (): User[] => {
  return [
    {
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
    {
      id: "2",
      personalNumber: "987654321",
      ldapId: "1554543",
      login: "janedoe",
      email: "jane.doe@email.com",
      firstName: "Jane",
      lastName: "Doe",
      fullName: "Jane Doe",
      photo: "jane.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract2"],
      managedContractIds: ["contract4", "contract5"],
    },
    {
      id: "3",
      personalNumber: "555555555",
      ldapId: "12345333",
      login: "johnsmith",
      email: "john.smith@email.com",
      firstName: "John",
      lastName: "Smith",
      fullName: "John Smith",
      photo: "john.jpg",
      userRoles: [MANAGER],
      ownedContractIds: [],
      managedContractIds: ["contract1", "contract3"],
    },
    {
      id: "4",
      personalNumber: "777777777",
      ldapId: "4434543",
      login: "maryjane",
      email: "mary.jane@email.com",
      firstName: "Mary",
      lastName: "Jane",
      fullName: "Mary Jane",
      photo: "mary.jpg",
      userRoles: [],
      ownedContractIds: [],
      managedContractIds: [],
    },
    {
      id: "5",
      personalNumber: "111111111",
      ldapId: "5554543",
      login: "bobbrown",
      email: "bob.brown@email.com",
      firstName: "Bob",
      lastName: "Brown",
      fullName: "Bob Brown",
      photo: "bob.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract5"],
      managedContractIds: [],
    },
    {
      id: "6",
      personalNumber: "345678901",
      ldapId: "8765432",
      login: "chatgpt",
      email: "chat.gpt@email.com",
      firstName: "Chat",
      lastName: "GPT",
      fullName: "Chat GPT",
      photo: "chatgpt.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract4"],
      managedContractIds: ["contract1", "contract5"],
    },
    {
      id: "7",
      personalNumber: "456789012",
      ldapId: "2345678",
      login: "maryjohnson",
      email: "mary.johnson@email.com",
      firstName: "Mary",
      lastName: "Johnson",
      fullName: "Mary Johnson",
      photo: "mary.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract2", "contract3"],
      managedContractIds: ["contract1", "contract4"],
    },
    {
      id: "8",
      personalNumber: "567890123",
      ldapId: "8765432",
      login: "peterwilliams",
      email: "peter.williams@email.com",
      firstName: "Peter",
      lastName: "Williams",
      fullName: "Peter Williams",
      photo: "peter.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract1", "contract5"],
      managedContractIds: ["contract2", "contract3"],
    },
    {
      id: "9",
      personalNumber: "678901234",
      ldapId: "3456789",
      login: "susanmiller",
      email: "susan.miller@email.com",
      firstName: "Susan",
      lastName: "Miller",
      fullName: "Susan Miller",
      photo: "susan.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract3", "contract4"],
      managedContractIds: ["contract1", "contract5"],
    },
    {
      id: "10",
      personalNumber: "789012345",
      ldapId: "7890123",
      login: "michaelbrown",
      email: "michael.brown@email.com",
      firstName: "Michael",
      lastName: "Brown",
      fullName: "Michael Brown",
      photo: "michael.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract2", "contract4"],
      managedContractIds: ["contract1", "contract3"],
    },
    {
      id: "11",
      personalNumber: "890123456",
      ldapId: "4567890",
      login: "laurasmith",
      email: "laura.smith@email.com",
      firstName: "Laura",
      lastName: "Smith",
      fullName: "Laura Smith",
      photo: "laura.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract5"],
      managedContractIds: ["contract2", "contract4"],
    },
    {
      id: "12",
      personalNumber: "901234567",
      ldapId: "5678901",
      login: "johnanderson",
      email: "john.anderson@email.com",
      firstName: "John",
      lastName: "Anderson",
      fullName: "John Anderson",
      photo: "john.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract3", "contract4"],
      managedContractIds: ["contract1", "contract5"],
    },
    {
      id: "13",
      personalNumber: "123098765",
      ldapId: "6789012",
      login: "emilythomas",
      email: "emily.thomas@email.com",
      firstName: "Emily",
      lastName: "Thomas",
      fullName: "Emily Thomas",
      photo: "emily.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract2", "contract5"],
      managedContractIds: ["contract1", "contract3"],
    },
    {
      id: "14",
      personalNumber: "234109876",
      ldapId: "7890123",
      login: "davidjones",
      email: "david.jones@email.com",
      firstName: "David",
      lastName: "Jones",
      fullName: "David Jones",
      photo: "david.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract4"],
      managedContractIds: ["contract1", "contract2"],
    },
    {
      id: "15",
      personalNumber: "345210987",
      ldapId: "8901234",
      login: "nataliegreen",
      email: "natalie.green@email.com",
      firstName: "Natalie",
      lastName: "Green",
      fullName: "Natalie Green",
      photo: "natalie.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract1", "contract3"],
      managedContractIds: ["contract2", "contract4"],
    },
    {
      id: "16",
      personalNumber: "456321098",
      ldapId: "9012345",
      login: "robertmartinez",
      email: "robert.martinez@email.com",
      firstName: "Robert",
      lastName: "Martinez",
      fullName: "Robert Martinez",
      photo: "robert.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract2", "contract5"],
      managedContractIds: ["contract1", "contract3"],
    },
    {
      id: "17",
      personalNumber: "567432109",
      ldapId: "0123456",
      login: "oliviaroberts",
      email: "olivia.roberts@email.com",
      firstName: "Olivia",
      lastName: "Roberts",
      fullName: "Olivia Roberts",
      photo: "olivia.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract3", "contract4"],
      managedContractIds: ["contract1", "contract2"],
    },
    {
      id: "18",
      personalNumber: "678543210",
      ldapId: "1234567",
      login: "ryanwhite",
      email: "ryan.white@email.com",
      firstName: "Ryan",
      lastName: "White",
      fullName: "Ryan White",
      photo: "ryan.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract5"],
      managedContractIds: ["contract1", "contract3"],
    },
    {
      id: "19",
      personalNumber: "789654321",
      ldapId: "2345678",
      login: "jessicamorris",
      email: "jessica.morris@email.com",
      firstName: "Jessica",
      lastName: "Morris",
      fullName: "Jessica Morris",
      photo: "jessica.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract2", "contract4"],
      managedContractIds: ["contract1", "contract5"],
    },
    {
      id: "20",
      personalNumber: "890765432",
      ldapId: "3456789",
      login: "briancooper",
      email: "brian.cooper@email.com",
      firstName: "Brian",
      lastName: "Cooper",
      fullName: "Brian Cooper",
      photo: "brian.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract3", "contract5"],
      managedContractIds: ["contract1", "contract2"],
    },
    {
      id: "21",
      personalNumber: "901876543",
      ldapId: "4567890",
      login: "sophiewilson",
      email: "sophie.wilson@email.com",
      firstName: "Sophie",
      lastName: "Wilson",
      fullName: "Sophie Wilson",
      photo: "sophie.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract4"],
      managedContractIds: ["contract2", "contract3"],
    },
    {
      id: "22",
      personalNumber: "123987654",
      ldapId: "5678901",
      login: "richardthompson",
      email: "richard.thompson@email.com",
      firstName: "Richard",
      lastName: "Thompson",
      fullName: "Richard Thompson",
      photo: "richard.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract1", "contract2"],
      managedContractIds: ["contract3", "contract4"],
    },
    {
      id: "23",
      personalNumber: "234098765",
      ldapId: "6789012",
      login: "victoriacarter",
      email: "victoria.carter@email.com",
      firstName: "Victoria",
      lastName: "Carter",
      fullName: "Victoria Carter",
      photo: "victoria.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract5"],
      managedContractIds: ["contract1", "contract4"],
    },
    {
      id: "24",
      personalNumber: "345109876",
      ldapId: "7890123",
      login: "danielharris",
      email: "daniel.harris@email.com",
      firstName: "Daniel",
      lastName: "Harris",
      fullName: "Daniel Harris",
      photo: "daniel.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract2", "contract3"],
      managedContractIds: ["contract4", "contract5"],
    },
    {
      id: "25",
      personalNumber: "456210987",
      ldapId: "8901234",
      login: "monicasmith",
      email: "monica.smith@email.com",
      firstName: "Monica",
      lastName: "Smith",
      fullName: "Monica Smith",
      photo: "monica.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract1", "contract4"],
      managedContractIds: ["contract2", "contract5"],
    },
    {
      id: "26",
      personalNumber: "567321098",
      ldapId: "9012345",
      login: "kevinbrown",
      email: "kevin.brown@email.com",
      firstName: "Kevin",
      lastName: "Brown",
      fullName: "Kevin Brown",
      photo: "kevin.jpg",
      userRoles: [MANAGER],
      ownedContractIds: ["contract3", "contract5"],
      managedContractIds: ["contract1", "contract2"],
    },
  ];
};

export const getGetAllArchivedOrdersPagedMock = (props: PageableParam) => ({
  currentPage: (() => {
    return props.PageNumber ? props.PageNumber : 1;
  })(),
  totalElements: (() => {
    // Update this line to reflect the actual number of users in your mock data
    return getMockedUsers().length;
  })(),
  totalPages: (() => {
    // Calculate total pages based on the number of items per page
    return Math.ceil(
      getMockedUsers().length / (props.PageSize ? props.PageSize : 30),
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
  content: getMockedUsers(),
});

export const getUsersMSW = () => [
  rest.get("*/users", (_req, res, ctx) => {
    const queryParams = Object.fromEntries(_req.url.searchParams);
    const props: PageableParam = {
      page: Number(queryParams.page),
      size: Number(queryParams.size),
      sort: queryParams.sort,
    };
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked All Paginated users status"),
      ctx.json(getGetAllArchivedOrdersPagedMock(props)),
    );
  }),
];