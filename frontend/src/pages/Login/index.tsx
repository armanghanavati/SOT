import React, { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hook";
import { isMobile, isTablet, osName } from "react-device-detect";
import { Button } from "../../components/Button";
import logo from "../../assets/img/1724181984017.jpg";
import Input from "../../components/Input";

const LogInForm: FC = () => {
    const [operatingSystem, setOperatingSystem] = useState<string | null>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState<any>({})

    useEffect(() => {
        if (isMobile) {
            setOperatingSystem(osName);
        } else if (isTablet) {
            setOperatingSystem("Tablet");
        } else {
            setOperatingSystem(window.navigator.platform);
        }
    }, []);

    const handleAccept = () => {
        const fixName = inputs?.userName === "rouzbeh"
        const fixPass = inputs?.password === "123456"
        if (fixName && fixPass) {
            navigate("/home")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg mx-auto p-8 w-full max-w-md">
                <form className="space-y-6">
                    <div className="flex justify-center">
                        <Link to="/">
                            <img
                                width={100}
                                height={100}
                                alt="Logo"
                                className="cursor-pointer"
                                src={String(logo)}
                            />
                        </Link>
                    </div>
                    <Input
                        className="w-full bg-gray-100 border border-gray-300 rounded p-2"
                        onChange={(e: any) => setInputs(((prev: any) => ({ ...prev, userName: e.target.value })))}
                        placeholder="Username"
                        aria-label="Room name input"
                    />
                    <Input
                        className="w-full bg-gray-100 border border-gray-300 rounded p-2"
                        onChange={(e: any) => setInputs(((prev: any) => ({ ...prev, password: e.target.value })))}
                        placeholder="Password"
                        type="password"
                        aria-label="Room name input"
                    />
                    <Button onClick={handleAccept} type="button" variant="secondary" label="login" className="w-full" />
                    <div className="text-center">
                        <p className="text-sm">
                            <Link className="text-blue-500 hover:underline" to="#">
                                Forgot your password?
                            </Link>
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm flex items-center justify-center">
                            Don't have an account?
                            <Link className="text-blue-500 hover:underline ml-1" to="/signUp">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogInForm;