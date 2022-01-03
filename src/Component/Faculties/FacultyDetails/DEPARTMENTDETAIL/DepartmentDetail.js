import BCS from "../BCSCompnent/BCS"
import Phy from "../PhyCompo/Phy.js"
import Chemistry from "../ChemisComponent/Chemistry"
import Botony from "../BotonyComponent/Botony"


const DepartmentDetail =[
    {
      id:"One",
      name:"Department Of Computer",
      value: <BCS />
    },
    {
        id:"Two",
      name:"Department Of Physics",
      value: <Phy />
      },
      {
        id:"Three",
        name:"Department Of Chemistry",
        value: <Chemistry />
      },
      {
        id:"Four",
        name:"Department Of Botony",
        value: <Botony />
      },
    //   {
    //     id:"Five",
    //     name:"Department Of Math",
    //     value: <Math />
    //   },


]
export default DepartmentDetail;