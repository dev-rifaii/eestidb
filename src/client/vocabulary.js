import supabase from "@/client/supabase.js";

export async function fetchVocabulary() {
    const {data, error} = await supabase
        .from('vocabulary')
        .select('*')
        .order('created_at', {ascending: false});
    return data;
}

export async function insertVocabulary(vocabulary) {
    await supabase
        .from('vocabulary')
        .insert([
            {
                en: vocabulary.en,
                nominative: vocabulary.nominative,
                genitive: vocabulary.genitive,
                partitive: vocabulary.partitive,
                user_id: (await supabase.auth.getSession()).data.session.user.id
            },
        ]).select();
}

export async function updateVocabulary(vocabulary) {
    return supabase
        .from('vocabulary')
        .update(vocabulary)
        .eq('id', vocabulary.id)
        .select();
}

export async function deleteVocabulary(id) {
    return supabase
        .from('vocabulary')
        .delete()
        .eq('id', id);
}