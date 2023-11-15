<?php 
    function setActive($name = "home") {
        global $pageName ;
        if (isset($pageName) && $pageName == $name) {
            echo 'class="active"';
        }

    }
        
?>

<!DOCTYPE html>
    <html>
        <head>
            <title> <?php if (isset($pageName)) { echo $pageName; }  ?>  </title>
            <link rel="stylesheet" href= '<?php echo $css; ?>' media="all">            
            <style>
                .active {
                    color : red;
                    font-weight : bold;
                }
                                
            </style>
            
            <style>
                header {
                    font-size: 20px; font-weight: bold; color:#fff; background-color: gray; border:3px solid black; text-align: center;
                }

                .tag {
                    border: 3px solid red; 
                    border-radius: 50px;
                    margin: 50px auto;
                    font-size: 30px;
                    font-weight: bold;
                    text-decoration: underline;
                    display: block;
                    text-align: center;
                    width: 200px;
                }
            </style>
        </head>
            
        <body class='body' style="background-color: <?php echo $body; ?>" > 
                <!-- links added class by [if Statement]   -->
                <h3> links added class by [If Statement] </h3>
                <ul>
                    <li> <a <?php if (isset($pageName) && $pageName == 'about') { echo 'class="active"' ; } ?>  href="about.php" > about </a>  </li>
                    <li> <a <?php if (isset($pageName) && $pageName == 'service' ) { echo 'class="active"' ; } ?>  href="service.php" > service </a>  </li>
                    <li> <a <?php if (isset($pageName) && $pageName == 'map' ) { echo 'class="active"' ; } ?>  href="map.php" > map </a>  </li>                
                </uls>
        
                <!-- links added class by the function  -->
                <h3> links added class by the Function </h3>
                <ul>
                    <li> <a <?php setActive('about') ?>  href="about.php" > about </a>  </li>
                    <li> <a <?php setActive('service') ?>  href="service.php" > service </a>  </li>
                    <li> <a <?php setActive('map') ?>  href="map.php" > map </a>  </li>            
                </ul>
        
            <!-- ------------------------------------------------------------------------- -->                    
            
        </body>
    </html> 