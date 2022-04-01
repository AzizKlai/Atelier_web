<?php



foreach ($_POST as $key => $value) {
    $_POST[$key]=htmlspecialchars($value);
}

echo "Bienvenue chez vous <b>".$_POST["nom"].' '.$_POST["prenom"].'</b> vous avez demander <b>'.$_POST["nombre"].'</b> Sandwich de : <b>'.$_POST["sandwich"].'</b><br>' ;
echo 'extension: /';
for ($i=1; $i <4 ; $i++) 
{ 
    if (array_key_exists("op$i",$_POST)==true) { 
       echo ($_POST["op$i"].' /  ');
}}

$facture=4*$_POST["nombre"];
echo '<br><br> Voici votre facture :<br>'.$_POST["nombre"].'  x  4dt  =    '.$facture.'dt';
if ($_POST["nombre"]>=10) {
    echo '<br>vous avez depasser 10 commande: felicitation vous benificiez de 10% de remise';
global $facture;
$facture*=0.9;
}
echo "<br><br> montant à payer= ".$facture.'dt<br><br><b>Bonne journée</b><br>       ';
$uploads_dir = 'ServerUploads/'; 




        

$nomDestination=md5(session_id().microtime().'.jpg');
        
        if (is_uploaded_file($_FILES["cin"]["tmp_name"])) {
            if (move_uploaded_file($_FILES["cin"]["tmp_name"],
            $uploads_dir.$nomDestination)) {
                echo "Le fichier temporaire ".$_FILES["cin"]["tmp_name"].
                        " a été déplacé vers ".$uploads_dir.$nomDestination;
            } else {
                echo "Le déplacement du fichier temporaire a échoué".
                        " vérifiez l'existence du répertoire ".$uploads_dir;
            }          
        } else {
            echo "Le fichier n'a pas été uploadé (trop gros ?)";
        }   

?>



