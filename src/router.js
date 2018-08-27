import React from 'react';
import { Switch, Route } from 'react-router-dom';



import Dashboard from './components/dashboard/dasbhoard';
import Home  from './components/home/home';
import Form from './components/form/form'
import Form2 from './components/form2/form2';
import Form3 from './components/form3/form3';
import Form4 from './components/form4/form4';
import ConditionDescriptions from './components/conditionDescriptions/conditionDescriptions';
import ExpandGear from './components/expandGear/expandGear';


export default (

  
    <Switch>
         <Route component={Home} exact path="/"/>
         <Route component={Dashboard} exact path='/dash'/>
         <Route component={Form} exact path="/form"/>
         <Route component={Form2} exact path='/form2'/>
         <Route component={Form3} exact path='/form3'/>
         <Route component={Form4} exact path='/form4'/>
         <Route component={ConditionDescriptions} exact path="/conditions"/>
         <Route component={ExpandGear} path="/gear/:id"/>
    </Switch>


  )
 

 