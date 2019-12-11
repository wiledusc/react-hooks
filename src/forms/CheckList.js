import React from 'react';

const CheckList = () => {

    const labels = [
        {name: "Freio de Pé", qtdbutton: 2},
        {name: "Freio de Pé", qtdbutton: 2},
        {name: "Freio de Pé", qtdbutton: 2},
    ];

    const otherLabels = [
        {name: "triângulo", qtdbutton: 2},
    ]

    return (
        <div className="container"> 

            <div className="row">
                <h1> Cadastro de CheckList </h1>
            </div>
            <div className="row">
                <div className="col s2"> <h5> <b> </b> </h5> </div>
                <div className="col s3"> <h5> <b> Funciona </b> </h5> </div>
                <div className="col s3"> <h5> <b> Não Funciona </b> </h5> </div>
                <div className="col s3"> <h5> <b> Em Conserto </b> </h5> </div>
            </div>
            {
                labels.map((label, key) => {
                    return (
                        <div className="row" key={key}>
                            <form action="#">
                                <div className="col s2"> 
                                    <label> <h6> {label.name} </h6> </label>
                                </div>
                                <div className="col s3">
                                    <label>
                                        <input className="with-gap" name="group1" type="radio"  />
                                        <span>Green</span>
                                    </label>
                                </div>
                                <div className="col s3">
                                    <label>
                                        <input className="with-gap" name="group1" type="radio"  />
                                        <span>Green</span>
                                    </label>
                                </div>
                                <div className="col s3">
                                    <label>
                                        <input className="with-gap" name="group1" type="radio"  />
                                        <span>Green</span>
                                    </label>
                                </div>
                            </form>
                        </div>           
                    );
                })
            }


            <div className="row">
                <div className="col s2" > <h5> <b>  </b> </h5> </div>
                <div className="col s3" style={{textAlign: 'center'}}> <h5> <b> Garantia </b> </h5> </div>
                <div className="col s3" style={{textAlign: 'center'}}> <h5> <b> Calibrado </b> </h5> </div>
                <div className="col s3" style={{textAlign: 'center'}}> <h5> <b> Bonito </b> </h5> </div>
            </div>

            {
                otherLabels.map((label, key) => {
                    return (
                        <div className="row" key={key}>
                            <div className="col s2">
                                <label> <h6> {label.name} </h6> </label>
                            </div>
                            <div className="col s3" style={{textAlign: 'center'}}>
                                <label>
                                    <input type="checkbox" className="filled-in" />
                                    <span>  </span>
                                </label>
                            </div>
                            <div className="col s3" style={{textAlign: 'center'}}>
                                <label>
                                    <input type="checkbox" className="filled-in" />
                                    <span> </span>
                                </label>
                            </div>
                            <div className="col s3" style={{textAlign: 'center'}}>
                                <label>
                                    <input type="checkbox" className="filled-in" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    )
                })
            }

            <div className="col s2">
                <button className="btn waves-effect waves-light" type="submit" name="action"> Salvar </button>
            </div>

        </div>
    )
}

export default CheckList;