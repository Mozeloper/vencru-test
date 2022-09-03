import React from "react";
import Text from "../../components/Typography/Typography";
import mail from "../../assets/icons/mail.svg";
import visa from "../../assets/icons/visa_icon.svg";
import mastercard from "../../assets/icons/Mastercard_icon_1.svg";
import download from "../../assets/icons/download_icon.svg";

const tableData = [
  {
    id: 1,
    selected: false,
    invoice: "Basic Plan – Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "paid",
    users: {
      img1: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      img2: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      img3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    selected: false,
    invoice: "Basic Plan – Nov 2022",
    amount: "USD $10.00",
    date: "Nov 1, 2022",
    status: "paid",
    users: {
      img1: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      img2: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      img3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    selected: false,
    invoice: "Basic Plan – Oct 2022",
    amount: "USD $10.00",
    date: "Oct 1, 2022",
    status: "paid",
    users: {
      img1: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      img2: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      img3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    selected: false,
    invoice: "Basic Plan – Sep 2022",
    amount: "USD $10.00",
    date: "Sep 1, 2022",
    status: "paid",
    users: {
      img1: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      img2: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      img3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 5,
    selected: false,
    invoice: "Basic Plan – Aug 2022",
    amount: "USD $10.00",
    date: "Aug 1, 2022",
    status: "paid",
    users: {
      img1: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      img2: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      img3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 6,
    selected: false,
    invoice: "Basic Plan – Jul 2022",
    amount: "USD $10.00",
    date: "Jul 1, 2022",
    status: "paid",
    users: {
      img1: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      img2: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      img3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 7,
    selected: false,
    invoice: "Basic Plan – Jun 2022",
    amount: "USD $10.00",
    date: "Jun 1, 2022",
    status: "paid",
    users: {
      img1: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      img2: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      img3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

class SelectTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: tableData,
      MasterChecked: false,
      SelectedList: [],
      selectedCard: "visa",
    };
  }

  handleSelectCardDetail(e, type) {
    this.setState({
      selectedCard: type,
    });
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.List;
    tempList.map((user) => (user.selected = e.target.checked));
    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });
    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  //   getSelectedRows() {
  //     this.setState({
  //       SelectedList: this.state.List.filter((e) => e.selected),
  //     });
  //   }

  render() {
    return (
      <>
        <div className="w-full flex flex-col">
          <Text variant="h1">Settings</Text>
          <Text variant="h4" color="text-secondary" weight="normal">
            Manage your team and preferences here.
          </Text>
        </div>
        <div className="w-full">
          <div className="w-full border border-[#D0D5DD] rounded-lg mt-4">
            <div className="overflow-x-auto overflow-hide no-scrollbar flex gap-4">
              <div className="p-[1%] cursor-pointer w-full">
                <Text variant="body" color="text-[#344054]" format="whitespace-nowrap text-center">
                  My details
                </Text>
              </div>
              <div className="border-r-2 border-[#D0D5DD]"></div>
              <div className="p-[1%] cursor-pointer w-full">
                <Text variant="body" color="text-[#344054]" format="whitespace-nowrap text-center">
                  Profile
                </Text>
              </div>
              <div className="border-r-2 border-[#D0D5DD]"></div>
              <div className="p-[1%] cursor-pointer w-full">
                <Text variant="body" color="text-[#344054]" format="whitespace-nowrap text-center">
                  Password
                </Text>
              </div>
              <div className="border-r-2 border-[#D0D5DD]"></div>
              <div className="p-[1%] cursor-pointer w-full">
                <Text variant="body" color="text-[#344054]" format="whitespace-nowrap text-center">
                  Team
                </Text>
              </div>
              <div className="border-r-2 border-[#D0D5DD]"></div>
              <div className="p-[1%] cursor-pointer w-full">
                <Text variant="body" color="text-[#344054]" format="whitespace-nowrap text-center">
                  Plan
                </Text>
              </div>
              <div className="border-r-2 border-[#D0D5DD]"></div>
              <div className="p-[1%] cursor-pointer w-full">
                <Text variant="body" color="text-[#344054]" format="whitespace-nowrap text-center">
                  Billing
                </Text>
              </div>
              <div className="border-r-2 border-[#D0D5DD]"></div>
              <div className="p-[1%] cursor-pointer w-full">
                <Text variant="body" color="text-[#344054]" format="whitespace-nowrap text-center">
                  Notifications
                </Text>
              </div>
              <div className="border-r-2 border-[#D0D5DD]"></div>
              <div className="p-[1%] cursor-pointer w-full">
                <Text variant="body" color="text-[#344054]" format="whitespace-nowrap text-center">
                  Integrations
                </Text>
              </div>
              <div className="border-r-2 border-[#D0D5DD]"></div>
              <div className="p-[1%] cursor-pointer w-full">
                <Text variant="body" color="text-[#344054]" format="whitespace-nowrap text-center">
                  API
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col mt-4">
          <Text variant="h4">Payment method</Text>
          <Text variant="body" color="text-secondary" weight="normal">
            Update your billing details and address.
          </Text>
        </div>
        <div className="border-b border-[#D0D5DD] my-6"></div>
        <div className="flex md:flex-row flex-col md:gap-16 gap-4">
          <div className="flex flex-col justify-start">
            <Text variant="h4" color="text-[#344054]">
              Contact email
            </Text>
            <Text variant="body" color="text-secondary" weight="normal">
              Where should invoices be sent?
            </Text>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <input type="radio" name="contact_email" className="accent-purple self-start" />
              <div className="flex flex-col">
                <Text variant="small">Send to my account email</Text>
                <Text variant="small" color="text-secondary" weight="normal">
                  olivia@untitledui.com
                </Text>
              </div>
            </div>
            <div className="flex gap-3">
              <input type="radio" name="contact_email" className="accent-purple self-start" />
              <div className="flex flex-col">
                <Text variant="small">Send to an alternative email</Text>
              </div>
            </div>
            <div className="bg-BACKGROUND_WHITE border border-[#D0D5DD] rounded-lg w-[300px] p-3 flex gap-2">
              <img src={mail} alt="img" loading="lazy" className="rounded-full" />
              <Text variant="small">billing@untitledui.com</Text>
            </div>
          </div>
        </div>
        <div className="border-b border-[#D0D5DD] my-6"></div>
        <div className="flex md:flex-row flex-col md:gap-16 gap-4">
          <div className="flex flex-col justify-start w-full basis-1/5">
            <Text variant="h4" color="text-[#344054]">
              Card details
            </Text>
            <Text variant="small" color="text-secondary" weight="normal">
              Select default payment method.
            </Text>
          </div>
          <div className="flex flex-col gap-4 w-full basis-4/5">
            <div
              className={`w-full p-6 flex justify-between ${
                this.state.selectedCard === "visa" ? "bg-[#F9F5FF]" : "bg-BACKGROUND_WHITE "
              }`}
            >
              <div className="flex gap-4">
                <img src={visa} alt="visa_icon" className="self-start" />
                <div className="flex flex-col">
                  <Text
                    variant="small"
                    color={`${this.state.selectedCard === "visa" ? "text-[#53389E]" : "text-[#344054]"}`}
                    weight="normal"
                    format="tracking-wide"
                  >
                    Visa ending in 1234
                  </Text>
                  <Text
                    variant="sub"
                    color={`${this.state.selectedCard === "visa" ? "text-purple" : "text-[#344054]"}`}
                    weight="normal"
                  >
                    Expiry 06/2024
                  </Text>
                  <div className="flex gap-3">
                    <Text
                      variant="sub"
                      color={`${this.state.selectedCard === "visa" ? "text-[#9E77ED]" : "text-secondary"}`}
                      weight="normal"
                    >
                      Set as default
                    </Text>
                    <Text variant="sub" color="text-[#9E77ED]" weight="normal">
                      Edit
                    </Text>
                  </div>
                </div>
              </div>
              <input
                type="radio"
                name="card_payment"
                className="accent-purple"
                checked={this.state.selectedCard === "visa" ? true : false}
                onChange={(e) => this.handleSelectCardDetail(e, "visa")}
              />
            </div>
            <div
              className={`w-full p-6 flex justify-between ${
                this.state.selectedCard === "master" ? "bg-[#F9F5FF]" : "bg-BACKGROUND_WHITE "
              }`}
            >
              <div className="flex gap-4">
                <img src={mastercard} alt="mastercard_icon" className="self-start" />
                <div className="flex flex-col">
                  <Text
                    variant="small"
                    color={`${this.state.selectedCard === "master" ? "text-[#53389E]" : "text-[#344054]"}`}
                    weight="normal"
                    format="tracking-wide"
                  >
                    Mastercard ending in 1234
                  </Text>
                  <Text
                    variant="sub"
                    color={`${this.state.selectedCard === "master" ? "text-purple" : "text-[#344054]"}`}
                    weight="normal"
                  >
                    Expiry 06/2024
                  </Text>
                  <div className="flex gap-3">
                    <Text
                      variant="sub"
                      color={`${this.state.selectedCard === "master" ? "text-[#9E77ED]" : "text-secondary"}`}
                      weight="normal"
                    >
                      Set as default
                    </Text>
                    <Text variant="sub" color="text-[#9E77ED]" weight="normal">
                      Edit
                    </Text>
                  </div>
                </div>
              </div>
              <input
                type="radio"
                name="card_payment"
                className="accent-purple"
                checked={this.state.selectedCard === "master" ? true : false}
                onChange={(e) => this.handleSelectCardDetail(e, "master")}
              />
            </div>
            <div className="w-full">
              <Text format="cursor-pointer" variant="h4" color="text-secondary" weight="normal">
                + Add new payment method
              </Text>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full flex justify-between md:flex-row flex-col gap-2">
          <Text variant="h3">Bill history</Text>
          <div className="bg-BACKGROUND_WHITE rounded-lg cursor-pointer p-3 flex gap-1 md:w-[146px] w-[120px] border border-[#D0D5DD]">
            <img src={download} alt="download_icon" loading="lazy" />
            <Text variant="body">Downlaod all</Text>
          </div>
        </div>
        <div className="mt-4 w-full mb-10 overflow-x-auto overflow-hidden no-scrollbar">
          <table className="bg-white rounded-lg w-full">
            <thead>
              <tr>
                <td className="bg-[#F9FAFB] text-[#667085] text-left px-8 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={this.state.MasterChecked}
                    id="mastercheck"
                    className="accent-purple"
                    onChange={(e) => this.onMasterCheck(e)}
                  />
                </td>
                <td className="bg-[#F9FAFB] text-[#667085] text-left px-8 py-4 whitespace-nowrap">Invoice</td>
                <td className="bg-[#F9FAFB] text-[#667085] text-left px-8 py-4 whitespace-nowrap">Amount</td>
                <td className="bg-[#F9FAFB] text-[#667085] text-left px-8 py-4 whitespace-nowrap">Date</td>
                <td className="bg-[#F9FAFB] text-[#667085] text-left px-8 py-4 whitespace-nowrap">Status</td>
                <td className="bg-[#F9FAFB] text-[#667085] text-left px-8 py-4 whitespace-nowrap">Users on plan</td>
              </tr>
            </thead>
            <tbody>
              {this.state.List.map((data, index) => (
                <tr key={index}>
                  <td className="px-8 py-4 text-[#101828] whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={data.selected}
                      className="accent-purple"
                      id="rowcheck{data.id}"
                      onChange={(e) => this.onItemCheck(e, data)}
                    />
                  </td>
                  <td className="px-8 py-4 text-[#101828] whitespace-nowrap">{data?.invoice}</td>
                  <td className="px-8 py-4 text-[#667085] whitespace-nowrap">{data?.amount}</td>
                  <td className="px-8 py-4 whitespace-nowrap text-[#667085]">{data?.date}</td>
                  <td className="px-8 py-4">
                    <p className="bg-[#ECFDF3] text-[#027A48] w-[50px] h-[22px] rounded-lg text-center">
                      {data?.status}
                    </p>
                  </td>
                  <td className="px-8 py-4 flex -space-x-1 overflow-hidden">
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default SelectTableComponent;
