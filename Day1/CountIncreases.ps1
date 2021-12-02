$arrayOfDepths = @(Get-Content Day1/numbers)
#$arrayOfDepths = 199, 200, 208, 210, 200, 207, 240, 269, 260, 263
$depthIndex = 0
$increasesInDepth = 0
foreach ($item in $arrayOfDepths) {
    $depthIndex++
    if ($arrayOfDepths[$depthIndex] -gt $arrayOfDepths[$depthIndex - 1]) {
        #Write-Output $arrayOfDepths[$depthIndex] "is greater than the last"
        Write-Output $arrayOfDepths[$depthIndex] " is greater than"  $arrayOfDepths[$depthIndex-1]
        $increasesInDepth++
    }
}
Write-Output $increasesInDepth "increases in depth"