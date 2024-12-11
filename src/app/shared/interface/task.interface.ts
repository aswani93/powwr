export interface DealModel {
    created: string,
    dueDate: string,
    status: string,
    customer: string,
    meters: number,
    quotes: string
  }


  export interface Step {
    title: string;
    description: string;
    status: string;
    showArrow: boolean;
  }
  
  export interface CardsData {
    title: string;
    steps: Step[];
  }