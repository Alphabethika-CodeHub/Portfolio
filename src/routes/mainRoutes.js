import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NotFound } from "../pages/Void/NotFound";
import RequireAuth from "../common/utils/RequireAuth";
import { LandingPage } from "../pages/LandingPage";

export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RequireAuth allowedRole={null} />}>
                    <Route path="/" exact element={<LandingPage />} />
                    <Route path="*" exact element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}