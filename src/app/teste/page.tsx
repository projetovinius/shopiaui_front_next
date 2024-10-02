import PrivateRoute from "@/components/PrivateRouter";

export default function SubScreen() {
    return (
        <PrivateRoute>
            <div className="flex-1 items-center justify-center">
                <p>aggggggggggggggggggggggggggg</p>
            </div>
        </PrivateRoute>
    )
};
