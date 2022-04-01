<?php session_start();

if(!isset($_SESSION['keep'])){
  $_SESSION['keep']=array();} 
 else {
  $nbnote = count($_SESSION['keep']);
  if(isset($_POST['titre'])){
   $_SESSION['keep'][$nbnote]['titre']=$_POST['titre'];
   $_SESSION['keep'][$nbnote]['note']=$_POST['note'];}
 } 
  
  ?>

<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>keep note</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>
<body>
  <form action="./notekeep.php" method="post">
<div class="">
        
        <div class="row">




            
            <div class="input-group mb-3 form-control col row">

                <div class="" ><input required style="border:white" type="text" placeholder="Titre" name="titre"  class="form-control name"></div>
                <div class="mb-3" ><textarea required  name="note" style="border:white" placeholder="Creer note..." id=""  class="form-control name"></textarea></div>
                <div class="mb-3" style="margin-left:90%"><button type="submit" class=" rounded-circle btn btn-secondary btn-circle btn-xl ">+</button></div>   
            </div>
            
         <div class="col" ></div>
        </div>
        <div class="row"><b>
          <?php  if(isset($_SESSION['keep'])){
            foreach ($_SESSION['keep'] as $key => $value) {
            
            
           ?>
          <div class="col" style="border: gray; background-color: lightgray; border-radius: 10%; padding: 2%;margin: 2%;"> <p><?php echo $value['titre']; ?> <br> <?php echo $value['note'];  ?></p></div>
          <?php }}?>
        </div>
</div>
    </form>
</body>
</html>