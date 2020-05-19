/**
 * check if user has passed plan_id
 * if so, move him to the next view
 * otherwise redirect him to the {plans} page
 *
 * @param to
 * @param from
 * @param next
 * @author Amr
 */
export default (to, from, next) => {
    let query = to.query;
    if (query.planId == undefined || query.planId == null) {
        next('/user/plans');                                              // redirect user to the root url, if plan is was not provided @author Amr
    }
    next();
}