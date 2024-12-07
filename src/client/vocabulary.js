import supabase from "@/client/supabase.js";

export async function fetchVocabulary() {
    const {data, error} = await supabase
        .from('vocabulary')
        .select('*');
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
            },
        ])
        .select()
}