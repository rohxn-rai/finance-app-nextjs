import { createClient } from "@supabase/supabase-js";
import { faker } from "@faker-js/faker"

import dotenv from "dotenv";

dotenv.config ( {
  path : ".env",
  debug : false
} )

type TypeOfTransaction =
  "Income" |
  "Expense" |
  "Investment" |
  "Saving";

type CategoryOfTransaction =
  "Housing" |
  "Transport" |
  "Health" |
  "Food" |
  "Education" |
  "Other";


interface Transaction {
  created_at : Date
  amount : number
  type : TypeOfTransaction
  category : CategoryOfTransaction
  description : string
}

const supabase = createClient (
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE!
)

const categories : CategoryOfTransaction[] = [
  "Housing",
  "Transport",
  "Health",
  "Food",
  "Education",
  "Other" ]

const seed = async () => {
  const transactions : Transaction[] = []
  
  for ( let i = 0; i < 10; i++ ) {
    const created_at = faker.date.past ()
    
    let type : TypeOfTransaction, category : CategoryOfTransaction = "Other"
    
    const typeBias = Math.random ()
    
    if ( typeBias < 0.80 ) {
      type = "Expense"
      category = faker.helpers.arrayElement ( categories )
    } else if ( typeBias < 0.90 ) {
      type = "Income"
    } else {
      type = faker.helpers.arrayElement ( [
        "Saving", "Investment"
      ] )
    }
    
    let amount : number
    
    switch ( type ) {
      case "Expense":
        amount = faker.number.int ( {
          min : 10,
          max : 1000
        } )
        break;
      case "Income":
        amount = faker.number.int ( {
          min : 2000,
          max : 9000
        } )
        break;
      case "Investment":
      case "Saving":
      default:
        amount = faker.number.int ( {
          min : 3000,
          max : 10000
        } )
        break;
    }
    
    transactions.push ( {
      created_at,
      amount,
      type,
      description : faker.lorem.sentence (),
      category
    } )
  }
  
  const { error } = await supabase.from ( "transactions" ).insert ( transactions )
  
  if ( error ) {
    console.error ( error )
  } else {
    console.log ( "Data inserted successfully." )
  }
}

seed ().catch ( (console.error) )
