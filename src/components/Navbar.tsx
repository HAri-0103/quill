
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import {LoginLink, RegisterLink} from "@kinde-oss/kinde-auth-nextjs/server"
import { ArrowRight } from "lucide-react";

export default function Navbar(){
    return(
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transtition-all">
            <MaxWidthWrapper className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
                <div className="flex h-14 items-center  justify-between border-b border-zinc-200">
                    <Link href="/" className="flex z-40 font-semibold"><span>quill.</span></Link>

                    {/** todo: add mobile navbar */}
                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                        <Link
                        className={buttonVariants({
                            variant:"ghost",
                            size:"sm",
                        })} href="/pricing">Pricings</Link>
                        <LoginLink
                        className={buttonVariants({
                            variant:"ghost",
                            size:"sm",
                        })}>
                            Sign in
                        </LoginLink>
                        <RegisterLink
                        className={buttonVariants({
                            size:"sm",
                        })}>
                           Get Started <ArrowRight className="ml-1.5 w-5 h-5"/>
                        </RegisterLink>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}