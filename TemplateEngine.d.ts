export interface TemplateEngine<T> {
    hasTemplate(name: string): Promise<boolean> | boolean;
    renderTemplate(name: string, data?: any): Promise<T> | T;
}
