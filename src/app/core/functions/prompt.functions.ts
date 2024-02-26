// chatPrompts.ts

import { CityEntitie } from "@domain/entities/city.entitie";

/**
 * Generates a prompt for obtaining a summary about the provided city using the GPT language model.
 * @param dataCity City data for which the summary is requested.
 * @returns String representing the prompt for city summary.
 */
export const getSummaryPrompt = (dataCity: CityEntitie): string => {
    const { city, country, region } = dataCity;
    return `I need you to give me a summary of the history and other general information about the city of ${city}, ${region} in ${country}`;
}

/**
 * Generates a prompt for comparing two cities using the GPT language model.
 * @param cities Array of two city names to be compared.
 * @returns String representing the prompt for city comparison.
 */
export const getComparePrompt = (cities: string[]): string => {
    return `I need you to generate a comparison between city ${cities[0]} and city ${cities[1]}, taking into account the population, size, climate, height above sea level,
    what its economy is based on and other useful data, try to highlight the important points with the <strong> tag and separate the important points with an unordered list (<ul>)
    Here I will take care of the rest, and finally, give a very detailed summary of their main differences. Please just give me the answer as if it were a search book. Do not make any comments.`;
}
