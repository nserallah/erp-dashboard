/**
 * this function is used to check whether the
 * company_id was passed through the route
 *
 * @param to
 * @param from
 * @param next
 * @authorAmr
 */
export default (to, from, next) => {
    let params = to.params;
    alert(params.companyId)
    if (params.companyId == undefined || params.companyId == null) {
        next({name: 'company.register'});                               // redirec user to the first step which is ( register company data ) @author Amr
    }
    next();
}