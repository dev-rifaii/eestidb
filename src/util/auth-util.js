import supabase from "@/client/supabase.js";

export const checkIfAuthenticated = async () => {
    const sessionJson = (await supabase.auth.getSession()).data.session;
    if (!sessionJson) return false;
    if (!sessionJson['expires_at'] || !sessionJson['access_token']) return false;

    const tokenExpiresAt = new Date(sessionJson['expires_at'] * 1000);
    const currentDate = new Date();
    const isExpiredToken = tokenExpiresAt < currentDate;
    return !isExpiredToken;
}

export const getUserId = async () => {
    return (await supabase.auth.getSession()).data.session.user.id;
}