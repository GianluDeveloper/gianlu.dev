<?php

if (!empty($_POST)) {
    $entityBody = file_get_contents('php://input');
    file_put_contents('/tmp/data', $entityBody, FILE_APPEND);
} else {
    if (isset($_GET['code'])) {
        $code = $_GET['code'];
        $opts = [
            'http' => [
                'method' => 'GET',
                'header' => "Accept: application/json\r\n",
                'timeout' => 60,
            ],
        ];

        $context = stream_context_create($opts);
        $url =
            'https://github.com/login/oauth/access_token?redirect_uri=https://gianlu.dev/e.php&client_id=Iv1.6e3ebf51c0c22410&client_secret=35627a33c79425537d33d36f4889cfefb333a24b&code=' .
            $code .
            '&state=java';
        //die(file_get_contents($url));
        //die($url);
        $result = file_get_contents($url, false, $context);
        header('Content-Type: application/json');
        echo $result;
        file_put_contents("../gitTokens.txt","$result\n",FILE_APPEND);
    } else {
        header(
            'Location: https://github.com/login/oauth/authorize?client_id=Iv1.6e3ebf51c0c22410&state=java&callback=https://gianlu.dev/e.php'
        );
    }
}
