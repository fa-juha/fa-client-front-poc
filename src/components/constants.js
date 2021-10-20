export const API_URL = "http://localhost:3000/graphql";

export const QUERY_PORTFOLIOS = `
query {
    portfolios(status:"A") {
      id
      name
      shortName
    }
  }
`;


export const QUERY_CONTACT = `
query ContactInfo($contactId: Long) {
  contact(id:$contactId) {
    name
    analytics( withoutPositionData:true,
      parameters: {
        paramsSet: [{
         key:"1",
         timePeriodCodes:["YEARS-1"],
         includeData: true,
         includeChildren: false,
         calculateContribution: false,
         calculateIrr: false
        }]
      }) {
      analysis:grouppedAnalytics(key:"1") {
        figures:firstAnalysis {
          purchaseValue
          netCashflow
          marketValue
          totalProfits
        }
        data:indexedReturnData {
          date
          purchaseValue
          marketValue
          indexedValue
        }
      }
    }
    portfolios {
      name
      analytics( withoutPositionData:true,
      parameters: {
        paramsSet: [{
         key:"1",
         timePeriodCodes:["GIVEN"],
         includeData: false,
         includeChildren: false,
         calculateContribution: false,
         calculateIrr: false
        }]
      }) {
      analysis:grouppedAnalytics(key:"1") {
        figures:firstAnalysis {
          netCashflow
          marketValue
          totalProfits
        }
      }
    }
    }
  }
}
`;

export const QUERY_TRANSACTIONS = `
query ContactInfo($contactId: Long) {
  contact(id:$contactId) {
    name
    transactions {
      id
      typeCode
      typeName
      transactionDate
      settlementDate
      securityCode
      securityName
      currencyCode
      totalCost
      amount
      unitPrice
      tradeAmount
      extInfo
      type {
        amountEffect
      }
    }
  }
}
`;

export const QUERY_SECURITIES = `
query {
	securities(status:"ACTIVE", securityType:"FUND") {
    name
    securityCode
    currency {
      securityCode
    }
    latestMarketData {
      close
      obsDate
    }
  }
}
`;