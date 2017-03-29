/**
 * @template T
 */
export interface TemplateEngine<T> {
    /**
     * Checks whether given template exists
     *
     * @param {string} name
     * @returns {Promise<boolean>|boolean}
     */
    hasTemplate(name: string): Promise<boolean>|boolean;

    /**
     * Returns result of template rendering
     *
     * @param {string} name
     * @param {*} data
     * @returns {Promise<T>|T}
     */
    renderTemplate(name: string, data?: any): Promise<T>|T;
}