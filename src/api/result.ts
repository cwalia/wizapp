import instance from "@/api/instance";
import store from "@/store/store";
import axios from "axios";
import router from "@/routes";


export const fetchTableData = async (): Promise<void> => {
  const exportData = {
    search_parameters: ''
  }
  const {data:data} = await axios({
    method: "get",
    url: "https://api.publicapis.org/entries",
  })
  return data as any
}



