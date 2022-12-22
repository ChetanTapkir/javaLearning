var checkmonth =function(month)
{switch(month)
    {
        case 1:
            console.log(`This month is Janwary Month`);
            console.log("Happy New Year in This month ");
            break;
            case 2:
                console.log(`This month is February  Month`);
                break;
                case 3:
                console.log(`This month is FebruarMarch  Month`);
                break;
                case 4:
                console.log(`This month is March  Month`);
                break;
                case 5:
                console.log(`This month is Aprill  Month`);
                break;
                case 6:
                console.log(`This month is June  Month`);
                break;
                case 7:
                console.log(`This month is Jully  Month`);
                break;
                case 8:
                console.log(`This month is August  Month`);
                break;
                case 9:
                console.log(`This month is September  Month`);
                break;
                case 10:
                console.log(`This month is October  Month`);
                break;
                case 11:
                console.log(`This month is November  Month`);
                break;
                case 12:
                console.log(`This month is December  Month`);
                break;   
                default:
                    console.log(`not valid data provided`);
                    break; 
    }
}
checkmonth();
checkmonth(2);
checkmonth(5);
checkmonth(12);
checkmonth(15);
checkmonth(100);

for( num=5; num<=15; num++)
{
    console.log(num);
}
for(num=50;num>=40;num--)
{
    console.log(num);
}
for ( index = 1; index<= 15; index++) {
    if(index%2!=0){console.log(index);}
}
for(i=1;i<=10;i++)
{
    if(i%2==0){console.log(i);}
}
for(i=5;i<=100;i++)
{if(i%5==0){console.log(i);} }
for(i=100;i>=10;i--){if(i%10==0){console.log(i);}}