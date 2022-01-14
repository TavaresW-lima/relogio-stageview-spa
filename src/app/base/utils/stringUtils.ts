export class StringUtils {

  public static leftZeroPad(valor: number, padLength: number): string {
    let stringValue = valor.toString();
    while(stringValue.length < padLength) {
      stringValue = "0".concat(stringValue);
    }
    return stringValue;
  }
}
