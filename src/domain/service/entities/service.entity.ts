import { InvalidParamError } from '../exceptions/invalid-params-error';

// Define um tipo ServiceProps que descreve as propriedades de um serviço
export type ServiceProps = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

// Define um tipo ServiceProps que descreve as propriedades de um serviço
export class Service {
  private constructor(private props: ServiceProps) {}

  // Método estático para criar um novo serviço com propriedades definidas
  public static create(name: string, description: string, icon: string) {
    const params = { name, description, icon }; // Agrupa os parâmetros em um objeto

    // Verifica se cada parâmetro é válido
    for (const [key, value] of Object.entries(params)) {
      if (!value) {
        throw new InvalidParamError(key.charAt(0) + key.slice(1)); // Lança o erro se o parâmetro for inválido
      }
    }

    return new Service({ id: crypto.randomUUID().toString(), name, description, icon });
  }

  // Método estático para criar um serviço com propriedades já definidas
  public static with(props: ServiceProps) {
    return new Service(props);
  }

  // Métodos getter para acessar as propriedades do serviço
  public get id() {
    return this.props.id;
  }

  public get name() {
    return this.props.name;
  }

  public get description() {
    return this.props.description;
  }

  public get icon() {
    return this.props.icon;
  }
}
