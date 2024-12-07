<?php

namespace App\Http\Controllers;

use App\Models\Tickets;
use Illuminate\Http\Request;

class TicketsController extends Controller
{
    //

    public function index(){
        return tickets::all();
    }

    public function show($id){

        $ticket = Tickets::find($id);

        if(!$ticket){
            return response()->json([
                'message'=>'ticket not found',
                404
            ]);
        }

        return response()->json($ticket,200);

    }



    public function Paystack(Request $request ){
        $url = "https://api.paystack.co/transaction/initialize";

        $name = $request->input('name');
        $email = $request->input('email');
        $amount = $request->input('amount');
        $ticket = $request->input('ticket');

        $fields = [
          'email' => $request->input('email'),
          'amount' => "500000"
        ];

        $fields_string = http_build_query($fields);

        //open connection
        $ch = curl_init();

        //set the url, number of POST vars, POST data
        curl_setopt($ch,CURLOPT_URL, $url);
        curl_setopt($ch,CURLOPT_POST, true);
        curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
          "Authorization: Bearer sk_test_b7c0b697665e1411b4f987c7a60c79c17a3db1c1",
          "Cache-Control: no-cache",
        ));

        //So that curl_exec returns the contents of the cURL; rather than echoing it
        curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);

        //execute post
        $result = curl_exec($ch);
        $response = json_decode($result, true);



        // store

        if($response['status']){
            $ticket = Tickets :: create([
                'customer_name'=>$name,
                'customer_email'=>$email,
                'transaction_id'=> $response['data']['reference'],
                'scanned' => false ,
                'ticket_type_id' => '9d992851-a82e-4032-b917-60646d7ab9fb'
            ]);
        }


        return response()->json($response);


    }


    // verify and store ticket

    public function store() {

        // $event = Events::create([
        //     'name' => $request->name,
        //     'Description' => $request->Description,
        //     'event_date' => $request-> event_date,
        //     'start_time'=> $request-> start_time,
        //     'end_time' =>$request-> end_time,
        //     'image_url' => $request-> image_url,
        //     'user_id' => $request-> user_id,
        //     'location'=>$request-> location,

        // ]);


        // return response()->json($event,201);

    }



    public function destroy($id){

        $ticket = Tickets::find($id);

        if(!$ticket){
            return response()->json([
                'message'=>'ticket not found',
                404
            ]);
        }

        $ticket->delete();
        return response()->json(['message' => 'ticket deleted successfully'], 200);
    }

}
