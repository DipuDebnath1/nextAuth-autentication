import User from "@/models/User";

export async function GET() {
    try{
      const user = await User.findAll()
      return Response.json({user})
    }
    catch{
        console.log("errror");
    }
  }

// export async function GET(){
//   try{
//       const user = await User.findAll()
//      return Response.json({user})
//   }
//   catch{
//       console.log({message:'data not found'});
//   }
// }
