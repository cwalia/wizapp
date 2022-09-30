import instance from "@/api/instance";
import store from "@/store/store";
import axios from "axios";
import router from "@/routes";


export const sample = async (): Promise<void> => {
  const exportData = {
    search_parameters: ''
  }
  const data = await axios({
    method: "post",
    url: "url",
    headers: { "Content-Type": "application/json;" },
    data: exportData,
  })
}



