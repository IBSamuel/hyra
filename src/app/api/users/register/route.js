import dbConnection from "@/dbConnection/dbconnect";
import User from "@/Model/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

dbConnection();

export async function POST(request) {
    const reqBody = await request.json();
    const { fullName, email, username, password } = reqBody;
      console.log(reqBody);
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ status: 400, message: "User already exists" });
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullName, email, username, password: hashedPassword });
        await newUser.save();
        
        return NextResponse.json({ status: 200, message: "User created successfully" });
    } catch (error) {
        console.error(error); 
        return NextResponse.json({ status: 500, message: "Error creating user" });
    }
}