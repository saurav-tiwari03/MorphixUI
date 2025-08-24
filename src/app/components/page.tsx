import Navbar from "@/components/Navbar";

export default function page() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">    
                <h1>Browse Components</h1>
            </div>
        </div>
    )
}