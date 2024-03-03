 <?php 
 date_default_timezone_set('Asia/Bangkok');
 
 //-This baht text code is taken from https://github.com/ponlawat-w/php-baht_text
 
const BAHT_TEXT_NUMBERS = array('ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า');
const BAHT_TEXT_UNITS = array('', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน');
const BAHT_TEXT_ONE_IN_TENTH = 'เอ็ด';
const BAHT_TEXT_TWENTY = 'ยี่';
const BAHT_TEXT_INTEGER = 'ถ้วน';
const BAHT_TEXT_BAHT = 'บาท';
const BAHT_TEXT_SATANG = 'สตางค์';
const BAHT_TEXT_POINT = 'จุด';

/**
 * Convert baht number to Thai text
 * @param double|int $number
 * @param bool $include_unit
 * @param bool $display_zero
 * @return string|null
 */
 
function baht_text ($number, $include_unit = true, $display_zero = true)
{
    if (!is_numeric($number)) {
        return null;
    }

    $log = floor(log($number, 10));
    if ($log > 5) {
        $millions = floor($log / 6);
        $million_value = pow(1000000, $millions);
        $normalised_million = floor($number / $million_value);
        $rest = $number - ($normalised_million * $million_value);
        $millions_text = '';
        for ($i = 0; $i < $millions; $i++) {
            $millions_text .= BAHT_TEXT_UNITS[6];
        }
        return baht_text($normalised_million, false) . $millions_text . baht_text($rest, true, false);
    }

    $number_str = (string)floor($number);
    $text = '';
    $unit = 0;

    if ($display_zero && $number_str == '0') {
        $text = BAHT_TEXT_NUMBERS[0];
    } else for ($i = strlen($number_str) - 1; $i > -1; $i--) {
        $current_number = (int)$number_str[$i];

        $unit_text = '';
        if ($unit == 0 && $i > 0) {
            $previous_number = isset($number_str[$i - 1]) ? (int)$number_str[$i - 1] : 0;
            if ($current_number == 1 && $previous_number > 0) {
                $unit_text .= BAHT_TEXT_ONE_IN_TENTH;
            } else if ($current_number > 0) {
                $unit_text .= BAHT_TEXT_NUMBERS[$current_number];
            }
        } else if ($unit == 1 && $current_number == 2) {
            $unit_text .= BAHT_TEXT_TWENTY;
        } else if ($current_number > 0 && ($unit != 1 || $current_number != 1)) {
            $unit_text .= BAHT_TEXT_NUMBERS[$current_number];
        }

        if ($current_number > 0) {
            $unit_text .= BAHT_TEXT_UNITS[$unit];
        }

        $text = $unit_text . $text;
        $unit++;
    }

    if ($include_unit) {
        $text .= BAHT_TEXT_BAHT;

        $satang = explode('.', number_format($number, 2, '.', ''))[1];
        $text .= $satang == 0
            ? BAHT_TEXT_INTEGER
            : baht_text($satang, false) . BAHT_TEXT_SATANG;
    } else {
        $exploded = explode('.', $number);
        if (isset($exploded[1])) {
            $text .= BAHT_TEXT_POINT;
            $decimal = (string)$exploded[1];
            for ($i = 0; $i < strlen($decimal); $i++) {
                $text .= BAHT_TEXT_NUMBERS[$decimal[$i]];
            }
        }
    }

    return $text;
}
// End baht text code 

 
 require('invoice.php');

 $serviceCondition = "โปรดชำระค่าธรรมเนียมก่อนรับข้อมููลข่าวสาร โดยโอนเงินค่าธรรมเนียมด้านล่างนี้ เข้าบัญชีธนาคารกรุงไทยของ สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เลขบัญชี 184-6-00591-4";
 $BE = date("Y")+543;
 $ThisTime = date("h:i:sa");
 $issueDate = strval(date("d/m/").$BE);
 $customer =strval( $_POST['name']);
 $copyFee = 1;
 $signFee = 5;
 $copyPage = $_POST['page'];
 $signNumber = $_POST['sign'];
 $pin = $_POST['pin'];
 $officer=$_POST['officer'];
 $position = $_POST['position'];
 $totalCopyFee = $copyFee * $copyPage;
 $totalSignFee = $signFee * $signNumber;
 $totalFee = $totalCopyFee + $totalSignFee;
 $btext = baht_text($totalFee); 
  
  
  $pdf = new PDF_Invoice( 'P', 'mm', 'A4' );
 // Add Thai font 
  $pdf->AddFont('THSarabunNew','','THSarabunNew.php');
  $pdf->AddFont('THSarabunNew','B','THSarabunNew_b.php');
  $pdf->AddPage();
  $pdf->SetFont('THSarabunNew','',16);

/* 
 $pdf->Cell(40, 10, iconv('UTF-8', 'cp874', 'สำนักงานลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม'));  
  

  $pdf->SetFont('THSarabunNew','B',16, true);
  $pdf->Cell(40, 10, iconv('UTF-8', 'cp874', ''));
  
  $pdf->SetFont('THSarabunNew','B',16);
*/
$pdf->image('images/mnre.png', 10,7,12,0,'', 'https://lin.ee/1ltKjol');
$pdf->SetFont('THSarabunNew','B',25);
$pdf->MultiCell(110,10, iconv('UTF-8','cp874','      ใบแจ้งค่าธรรมเนียม'));
$pdf->SetFont('THSarabunNew','B',16);
$pdf->MultiCell(130,7, iconv('UTF-8','cp874','สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม'));
$pdf->SetFont('THSarabunNew','',16);																		
$pdf->MultiCell(100,5, iconv('UTF-8','cp874','98 ซอยพหลโยธิน 7 ถนนพหลโยธิน แขวงพญาไท                     เขตพญาไท กรุงเทพฯ 10400                                            เลขประจำตัวผู้เสียภาษีอากร 0 9940 00044 61 5'), 0, 'L');
$pdf->MultiCell(100,5,"Tel. 0 2265 6223-5; Email: servicelinkcenter@mnre.go.th
 ");

$timeNow = strval(time()); 

$pdf->SetFont('THSarabunNew','B',18);			
$pdf->MultiCell(100,10, iconv('UTF-8','cp874','เงื่อนไขบริการ'), 1, 'C');

$pdf->SetFont('THSarabunNew','',16);			
$pdf->MultiCell(100,8, iconv('UTF-8','cp874',$serviceCondition), 1, 'C');
  
$pdf->SetFont('THSarabunNew','B', 16);
$pdf->fact_dev('INVOICE','');
$pdf->addDate($issueDate);
$pdf->addClient(strval($ThisTime));
$pdf->addPageNumber("1/1");
$pdf->SetFont('THSarabunNew','B', 16);
$pdf->addClientAdresse(iconv('UTF-8','cp874', 'ชื่อผูู้ขอ: ' . $customer));
//$pdf->addReglement('Code: '. substr(hash('sha3-512', $customer),0,8));
//$pdf->addEcheance("03/12/2003");

$pdf->SetFont('THSarabunNew','B', 16);
$cols=array(iconv('UTF-8','cp874','ที่')   => 23,
             iconv('UTF-8','cp874','รายการ')  => 78,
             iconv('UTF-8','cp874','จำนวน')     => 22,
             iconv('UTF-8','cp874','บาท/หน่วย')      => 26,
             iconv('UTF-8','cp874','เป็นเงิน') => 30,
             iconv('UTF-8','cp874','หน่วย')          => 11 );
$pdf->addCols( $cols);
$cols=array( iconv('UTF-8','cp874','ที่')    => "C",
             iconv('UTF-8','cp874','รายการ')  => "L",
             iconv('UTF-8','cp874','จำนวน')     => "C",
             iconv('UTF-8','cp874','บาท/หน่วย')      => "R",
             iconv('UTF-8','cp874','เป็นเงิน') => "R",
             iconv('UTF-8','cp874','หน่วย')          => "C" );
$pdf->addLineFormat( $cols);
$pdf->addLineFormat($cols);

$y    = 109;
$line = array( iconv('UTF-8','cp874','ที่')    => '1',
               iconv('UTF-8','cp874','รายการ')  => iconv('UTF-8','cp874','ค่าธรรมเนียมการจัดทำสำเนาข้อมููลข่าวสาร') . "\n" .
                                 "\n" .
                                 "",
               iconv('UTF-8','cp874','จำนวน')     => strval(number_format($copyPage)),
               iconv('UTF-8','cp874','บาท/หน่วย')      => strval(number_format($copyFee, 2)),  
               iconv('UTF-8','cp874','เป็นเงิน') => strval(number_format($totalCopyFee, 2)),
               iconv('UTF-8','cp874','หน่วย')          => iconv('UTF-8','cp874','บาท') );
$size = $pdf->addLine( $y, $line );
$y   += $size + 2;

$line = array( iconv('UTF-8','cp874','ที่')   => "2",
               iconv('UTF-8','cp874','รายการ')  => iconv('UTF-8','cp874','ค่าธรรมเนียมการให้คำรับรองถููกต้อง') . "\n" .
                                 "\n" .
                                 "",
               iconv('UTF-8','cp874','จำนวน')     => strval(number_format($signNumber)),
               iconv('UTF-8','cp874','บาท/หน่วย')      => strval(number_format($signFee, 2)),
               iconv('UTF-8','cp874','เป็นเงิน') => strval(number_format($totalSignFee, 2)),
               iconv('UTF-8','cp874','หน่วย')          => iconv('UTF-8','cp874','บาท') );
 
$size = $pdf->addLine( $y, $line );

$y   += $size + 2;


$line = array( iconv('UTF-8','cp874','ที่')   => iconv('UTF-8','cp874',' '),
               iconv('UTF-8','cp874','รายการ')  => iconv('UTF-8','cp874','                           รวมเงินที่ต้องชำระทั้งสิ้น') . "\n" ."\n".
                                 '(' . iconv('UTF-8','cp874',$btext) .')'.
                                 "",
               iconv('UTF-8','cp874','จำนวน')     => " ",
               iconv('UTF-8','cp874','บาท/หน่วย')      => " ",
               iconv('UTF-8','cp874','เป็นเงิน') => strval(number_format($totalFee, 2)),
               iconv('UTF-8','cp874','หน่วย')          => iconv('UTF-8','cp874','บาท') );
 
$size = $pdf->addLine( $y, $line );

$y   += $size + 2; 



$hash = 'c08fcfd8fac91ca096cc64f1a804400d63355fbda6fbed08cd69fc358c1bb09b86076ddd486556dc2d98812960b8272b27da41249d63735fe63032af4668661e';
if(hash('sha3-512',$pin)==$hash){
$pdf->SetY(-47);
$pdf->Cell(0, 7, iconv('UTF-8','cp874','ศููนย์บริการร่วมกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม'), 0, 0, 'C');
$pdf->SetY(-37);
//$pdf->Cell(0, 0, 'Service Link Center, Ministry of Natural Resources and Environment', 0, 0, 'C');
$pdf->SetY(-37);
$pdf->SetFont('THSarabunNew','', 12);
$pdf->Cell(0, 0, iconv('UTF-8','cp874','ผูู้ออกใบแจ้งค่าธรรมเนียม ') . ': '  . iconv('UTF-8','cp874', $officer) . ' ' . iconv('UTF-8','cp874', $position) . iconv('UTF-8','cp874',' ศบร.ทส.'), 0, 0, 'C');
$pdf->image('images/lineoa.png', 10,250,20,0,'', 'https://lin.ee/1ltKjol');
$pdf->SetY(-29);
$pdf->SetFont('THSarabunNew','', 14);
$pdf->Cell(0, 7, iconv('UTF-8','cp874','ส่งหลักฐานโอนเงิน'), 0, 0, 'L');
$pdf->temporaire( "Approved" );
$pdf->addNumTVA($timeNow);
$pdf->Output();
$pdf->Output('F', 'einvoice/'. $timeNow. '.pdf');
}
else{
$pdf->SetY(-47);
$pdf->Cell(0, 7, iconv('UTF-8','cp874','คำเตือน เอกสารนี้จัดทำขึ้นโดยผู้ไม่มีหน้าที่เกี่ยวข้อง'), 0, 0, 'C');
$pdf->temporaire( "Not approved!" );
$pdf->Output();
}
 
?>
