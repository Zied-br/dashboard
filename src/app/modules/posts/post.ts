export interface Ipost{
      id:number;
      nom: string;
      nomp:string;
      description: string;
      url:string;
      urlp:string;
      toggle_l : boolean;
      status_l : string;
      enableDisableRule_l() ;
      toggle_c : boolean;
      status_c : string;
      enableDisableRule_c() ;

}
