import User from "@/models/User"

// export async function POST(req, res) {

//     try {
//         const parsedData = await req.body; // Parse JSON data from the request body
//         console.log(req.body);
//         console.log('Received data:', parsedData); // Log parsed data for debugging


//         Response.json({ message: 'Data received successfully!' });
//     } catch (error) {
//         console.error(error);
//         Response.json({ message: 'Error processing data' });
//     }
// }


// export async function POST() {
//     try {
//         console.log("params::",req.body.params);
//       const { name, email, password } = await req.body; // Access user data from request body
  
//       const newUser = await User.create({ name, email, password }); // Create a new user

//       return Response.json({ user: newUser }); // Send 201 Created response with new user data
//     } catch (error) {
//       return Response.json({ message: 'Hello Error creating user' }); // Send 400 Bad Request if error
// }
//   }



export async function GET() {
    try {
        const user = await User.findAll()
        return Response.json({ user})
    }
    catch {
        console.log({ message: 'data not found' });
    }
}



// Import necessary modules and dependencies

export async function POST(req, res) {
  try {
    console.log("params::", req.body.params);

    const { name, email, password } = req.body; // Access user data from request body

    // Check if the required fields are provided
    // if (!name || !email || !password) {
    //   return res.status(400).json({ message: 'Missing required fields' });
    // }

    // Check if the email is already registered
    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).json({ message: 'Email is already registered' });
    // }

    // Create a new user
    const newUser = await User.create({ name, email, password });

    // Send a 201 Created response with new user data
    return Response.json({ user: newUser });
  } catch (error) {
    console.error(error);
    // Send a 500 Internal Server Error response if an error occurs
    return Response.json({ message: 'Error creating user' });
  }
}


